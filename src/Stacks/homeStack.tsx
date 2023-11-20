import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/MainScreens/HomeScreen';
import SearchScreen from '../Screens/MainScreens/SearchScreen';
import SettingScreen from '../Screens/MainScreens/SettingScreen';

const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;