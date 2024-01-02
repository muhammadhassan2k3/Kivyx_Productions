import React, {useContext, useState} from 'react';
import styles from './style';
import {
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../../Navigation/authProvider';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import useThemedStyles from '../../../Theming/useThemedStyles';
import useTheme from '../../../Theming/useTheme';

const  LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const authContext = useContext(AuthContext);
  const navigation = useNavigation();

  const style = useThemedStyles(styles);
  const theme = useTheme();

  if (!authContext) {
    return <Text>loginError: AuthContext is not defined</Text>;
  }

  const {login, loginError, setLoginError} = authContext;

  const handleInputChange = (text: any) => {
    setEmail(text);
    if (loginError) {
      setLoginError(null);
    }
  };
  const handlePasswordChange = (text: any) => {
    setPassword(text);
    if (loginError) {
      setLoginError(null);
    }
  };
  const handleLogin = () => {
    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    try {
    login({email, password});
    console.log('clicked');
    } catch (e) {
      console.log('Login', e)
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email: any) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);

  };


  return (
    <SafeAreaView style={style.containerView}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={style.loginScreenContainer}>
        <View>
            <Text style={style.welcomeText}>LogIn</Text>
          </View>
          <View style={style.loginFormView}>
          <View style={style.TextInputContiner}>
            <TextInput
              value={email}
              placeholder="Email"
              onChangeText={handleInputChange}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor={theme.colors.BACKGROUND}
              style={{fontSize: 18}}
            />
            </View>
            <View style={style.TextInputContiner}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={theme.colors.BACKGROUND}
              onChangeText={handlePasswordChange}
              value={password}
              secureTextEntry={!showPassword}
              style={{fontSize: 18,flex: 1}}
            />
            <Feather
                name={showPassword ? 'eye-off' : 'eye'}
                size={25}
                color={theme.colors.TEXT}
                onPress={handleTogglePasswordVisibility}
              />
            </View>
            {loginError && (
              <Text style={style.loginError}>
                {loginError}
              </Text>
            )}
            <View style={style.signinButtonContainer}>
              <Text
                style={style.forgotPasswrodText}
                onPress={() => navigation.navigate('ForgotPassword' as never)}
                >Forgot Password</Text>
               <FontAwesome5
                name="arrow-circle-right"
                size={40}
                color={theme.colors.BLUEBUTTON}
                onPress={handleLogin}
              />
            </View>
            <View>
              <Text style={style.upperSignupText}
                onPress={() => navigation.navigate('Signup' as never)}>
                Don't have an account? <Text style={style.signupText} >SignUp</Text>
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default LoginScreen;
