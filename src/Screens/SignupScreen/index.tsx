import React, {useState} from 'react';
import styles from './style';
import {SafeAreaView, TextInput, View} from 'react-native';
import {Button} from 'react-native-elements';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          placeholder="Create Password"
          value={password}
          onChangeText={txt => setPassword(txt)}
          placeholderTextColor="#c4c3cb"
          style={styles.loginFormTextInput}
          secureTextEntry={true}
        />
        <TextInput
          placeholder="Confirm Password"
          value={password}
          onChangeText={txt => setPassword(txt)}
          placeholderTextColor="#c4c3cb"
          style={styles.loginFormTextInput}
          secureTextEntry={true}
        />
        <Button buttonStyle={styles.loginButton} title="SignUp" />
      </View>
    </SafeAreaView>
  );
}
