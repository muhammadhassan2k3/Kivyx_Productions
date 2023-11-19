import {View, Text, SafeAreaView} from 'react-native';
import React, {useContext} from 'react';
import {Button} from 'react-native-elements';
import {AuthContext} from '../../../Navigation/authProvider';
import {styles} from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const SettingScreen = () => {
  const authContext = useContext(AuthContext);
  const navigation = useNavigation();


  if (!authContext) {
    return <Text>Error: AuthContext is not defined</Text>;
  }

  const {logout} = authContext;
  return (
    <SafeAreaView >
      <View style={styles.containerView}>
        <Ionicons name='arrow-back' size={40} onPress={() => navigation.goBack()}/>
        <Button title="Logout" onPress={() => logout()} />
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;
