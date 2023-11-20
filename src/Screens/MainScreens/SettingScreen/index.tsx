import {View, Text, SafeAreaView, Switch} from 'react-native';
import React, {useContext} from 'react';
import {Button} from 'react-native-elements';
import {AuthContext} from '../../../Navigation/authProvider';
import {styles} from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import useTheme from '../../../Theming/useTheme';
import useThemedStyles from '../../../Theming/useThemedStyles';

const SettingScreen = () => {
  const authContext = useContext(AuthContext);
  const navigation = useNavigation();

  const theme = useTheme();
  const style = useThemedStyles(styles);


  if (!authContext) {
    return <Text>Error: AuthContext is not defined</Text>;
  }

  const {logout} = authContext;
  return (
    <SafeAreaView style={style.mainContainer}>
      <View style={style.containerView}>
         <View style={style.headerStyle}>
          <Ionicons
            name="arrow-back"
            size={40}
            color={theme.colors.TEXT}
            onPress={() => navigation.goBack()}
          />
        </View>
        <Button title="Logout" onPress={() => logout()} />
      </View>
      <View style={style.container}>
          <Text style={style.textStyle}>Theme</Text>
          <Switch value={theme.isLightTheme} onValueChange={theme.toggleTheme} />
        </View>
    </SafeAreaView>
  );
};

export default SettingScreen;
