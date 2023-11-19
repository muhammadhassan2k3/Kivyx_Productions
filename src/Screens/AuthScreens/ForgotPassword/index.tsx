import React, {useState, useContext} from 'react';
import styles from './styles';
import {
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
  Alert,
} from 'react-native';
import {AuthContext} from '../../../Navigation/authProvider';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const authContext = useContext(AuthContext);

  if (!authContext) {
    return <Text>Error: AuthContext is not defined</Text>;
  }

  const {resetPassword} = authContext;

  const handleResetPassword = async () => {
    try {
      await resetPassword(email);
      Alert.alert('Success', 'Password Reset Email sent successfully', [
        {text: 'OK', onPress: () => navigation.navigate('Login' as never)},
      ]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <SafeAreaView style={styles.containerView}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.signupScreenContainer}>
          <View>
            <Text style={styles.welcomeText}>Reset Password</Text>
          </View>
          <View style={styles.signupFormView}>
            <TextInput
              value={email}
              placeholder="Enter your Email"
              onChangeText={userEmail => setEmail(userEmail)}
              keyboardType="email-address"
              autoCorrect={false}
              placeholderTextColor="#000"
              style={styles.signupFormTextInput}
            />
            <View style={styles.signinButtonContainer}>
              <Text style={styles.signupText}>Submit</Text>
              <FontAwesome5
                name="arrow-circle-right"
                size={40}
                color="#367CFE"
                onPress={handleResetPassword}
                disabled={!email}
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
