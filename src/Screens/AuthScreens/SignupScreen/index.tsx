import React, {useState, useContext} from 'react';
import styles from './style';
import {
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';
import {AuthContext} from '../../../Navigation/authProvider';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import useTheme from '../../../Theming/useTheme';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const navigation = useNavigation();

  const theme = useTheme();

  const authContext = useContext(AuthContext);

  if (!authContext) {
    return <Text>Error: AuthContext is not defined</Text>;
  }

  const {signUp, signupError, setSignupError} = authContext;

  const handleInputChange = (text: any) => {
    setEmail(text);
    if (signupError) {
      setSignupError(null);
    }
  };

  const handlePasswordChange = (text: any) => {
    setPassword(text);
    if (signupError) {
      setSignupError(null); // Clear the loginError when the user starts typing
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email: any) => {
    // Basic email validation using a regular expression
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSignUp = () => {
    if (!validateEmail(email)) {
      setIsValidEmail(false);
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    try {
      signUp({email, password})
    }
    catch(err){
      console.log("handleSignUp", err)
    }
  }


  return (
    <SafeAreaView style={styles.containerView}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.signupScreenContainer}>
          <View>
            <Text style={styles.welcomeText}>Create Account</Text>
          </View>
          <View style={styles.signupFormView}>
            <TextInput
              value={email}
              placeholder="Email"
              onChangeText={handleInputChange}
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholderTextColor="#000"
              style={styles.signupFormTextInput}
            />
            <View style={styles.signupFormTextInput} >
            <TextInput
              placeholder="Create Password"
              placeholderTextColor="#000"
              onChangeText={handlePasswordChange}
              value={password}
              secureTextEntry={!showPassword}
              style={{fontSize: 20, flex: 1}}
            />
            <Feather
                name={showPassword ? 'eye-off' : 'eye'}
                size={25}
                color={theme.colors.TEXT}
                onPress={handleTogglePasswordVisibility}
              />
            </View>
            {signupError && <Text style={{color: 'red'}}>{signupError}</Text>}
            <View style={styles.signinButtonContainer}>
              <Text style={styles.signupText}>SignUp</Text>
              <FontAwesome5
                name="arrow-circle-right"
                size={40}
                color="#3897f1"
                onPress={handleSignUp}
              />
            </View>
            <View>
              <Text style={styles.upperSignupText}
                onPress={() => navigation.navigate('Login' as never)}>
                Already have an account? <Text style={styles.innerSignupText} >LogIn</Text>
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default SignUpScreen;
