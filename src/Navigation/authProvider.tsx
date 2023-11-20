import React, {createContext, useState, ReactNode} from 'react';
import auth from '@react-native-firebase/auth';

export type AuthContextType = {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  signupError: any;
  setSignupError: React.Dispatch<React.SetStateAction<any>>;
  loginError: any;
  setLoginError: React.Dispatch<React.SetStateAction<any>>;
  login: (credentials: {email: string; password: string}) => Promise<void>;
  signUp: (credentials: {email: string; password: string}) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [user, setUser] = useState<any>(null);
  const [loginError, setLoginError] = useState<any>(null);
  const [signupError, setSignupError] = useState<any>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loginError,
        setLoginError,
        signupError,
        setSignupError,

        login: async ({email, password}) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
            console.log('email:', email);
          } catch (e: any) {
            if (e.message.includes('INVALID_LOGIN_CREDENTIALS')) {
              console.log(e);
              setLoginError("Email and password Doesn't match");
            } else if (e.message.includes('auth/invalid-email')) {
              console.log(e);
              setLoginError('This email Already Exist');
            }
            console.log(e);
          }
        },

        signUp: async ({email, password}) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e: any) {
            if (e.message.includes('The given password is invalid')) {
              console.log(e);
              setSignupError('Password should be at least 6 characters long');
            } else if (e.message.includes('auth/email-already-in-use')) {
              console.log(e);
              setSignupError('This email Already Exist');
            }
            console.log("signUp function ",e);
          }
        },

        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log("logout function ",e);
          }
        },

        resetPassword: async (email: string) => {
          try {
            await auth().sendPasswordResetEmail(email);
          } catch (e) {
            console.log("resetPassword function ",e);
          }
        },

      }}>  
      {children}
    </AuthContext.Provider>
  );
};