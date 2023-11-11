import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

import styles from './style';
import {SafeAreaView, Text, TextInput, View} from 'react-native';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.containerView}>
      <View style={styles.loginScreenContainer}>
        <TextInput
          placeholder="email"
          value={email}
          onChangeText={txt => setEmail(txt)}
          placeholderTextColor="#c4c3cb"
          style={styles.loginFormTextInput}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={txt => setPassword(txt)}
          placeholderTextColor="#c4c3cb"
          style={styles.loginFormTextInput}
          secureTextEntry={true}
        />
        <Button
          buttonStyle={styles.loginButton}
          title="LogIn"
          onPress={() => {
            createUser();
          }}
        />
        <Text style={styles.SignUpText}>
          Don't have an account?{' '}
          <Text
            style={styles.SignUpButton}
            onPress={() => {
              navigation.navigate('Signup' as never);
            }}>
            Sign Up
          </Text>{' '}
        </Text>
      </View>
    </SafeAreaView>
  );
}
