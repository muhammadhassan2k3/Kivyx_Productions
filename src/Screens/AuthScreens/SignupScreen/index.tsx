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
} from 'react-native';
import {AuthContext} from '../../../Navigation/authProvider';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const authContext = useContext(AuthContext);

  if (!authContext) {
    // Handle the case where AuthContext is not defined
    return <Text>Error: AuthContext is not defined</Text>;
  }

  const {register, signupError, setSignupError} = authContext;

  const handleInputChange = text => {
    setEmail(text);
    if (signupError) {
      setSignupError(null); // Clear the loginError when the user starts typing
    }
  };
  const handlePasswordChange = text => {
    setPassword(text);
    if (signupError) {
      setSignupError(null); // Clear the loginError when the user starts typing
    }
  };
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
              placeholderTextColor="#000"
              style={styles.signupFormTextInput}
            />
            <TextInput
              placeholder="Create Password"
              placeholderTextColor="#000"
              onChangeText={handlePasswordChange}
              value={password}
              secureTextEntry={true}
              style={styles.signupFormTextInput}
            />
            {signupError && <Text style={{color: 'red'}}>{signupError}</Text>}
            <View style={styles.signinButtonContainer}>
              <Text style={styles.signupText}>SignUp</Text>
              <FontAwesome5
                name="arrow-circle-right"
                size={40}
                color="#3897f1"
                onPress={() => register({email, password})}
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
