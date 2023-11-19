import React, {useContext, useState} from 'react';
import styles from './style';
import {
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../../Navigation/authProvider';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authContext = useContext(AuthContext);
  const navigation = useNavigation();

  if (!authContext) {
    return <Text>loginError: AuthContext is not defined</Text>;
  }

  const {login, loginError, setLoginError} = authContext;

  const handleInputChange = text => {
    setEmail(text);
    if (loginError) {
      setLoginError(null);
    }
  };
  const handlePasswordChange = text => {
    setPassword(text);
    if (loginError) {
      setLoginError(null);
    }
  };
  const handleLogin = () => {
    login({email, password});
    console.log('clicked');
  };

  return (
    <SafeAreaView style={styles.containerView}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
        <View>
            <Text style={styles.welcomeText}>LogIn</Text>
          </View>
          <View style={styles.loginFormView}>
            <TextInput
              value={email}
              placeholder="Email"
              onChangeText={handleInputChange}
              keyboardType="email-address"
              autoCorrect={false}
              placeholderTextColor="#000"
              style={styles.loginFormTextInput}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#000"
              onChangeText={handlePasswordChange}
              value={password}
              secureTextEntry={true}
              style={styles.loginFormTextInput}
            />
            {loginError && (
              <Text style={styles.loginError}>
                {loginError}
              </Text>
            )}
            <View style={styles.signinButtonContainer}>
              <Text
                style={styles.forgotPasswrodText}
                onPress={() => navigation.navigate('ForgotPassword' as never)}
                >Forgot Password</Text>
               <FontAwesome5
                name="arrow-circle-right"
                size={40}
                color="#3897f1"
                onPress={handleLogin}
              />
            </View>
            <View>
              <Text style={styles.upperSignupText}
                onPress={() => navigation.navigate('Signup' as never)}>
                Don't have an account? <Text style={styles.signupText} >SignUp</Text>
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default LoginScreen;
