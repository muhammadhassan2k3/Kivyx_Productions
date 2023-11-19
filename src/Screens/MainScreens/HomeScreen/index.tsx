import {View, Text, Image, SafeAreaView} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import useThemedStyles from '../../../Theming/useThemedStyles';
import {styles} from './style';

const HomeScreen = () => {
  const navigation = useNavigation();
  const style = useThemedStyles(styles);

  return (
    <SafeAreaView>
      <View style={style.headerContainer}>
        <View style={style.innerHeaderContainer}>
          <Image
            style={style.headerLogo}
            source={require('../../../Assets/kivyxLogo.png')}
          />
          <Text style={style.headerText}>Kivyx</Text>
        </View>
        <View style={style.iconContainer}>
          <FontAwesome
            name="search"
            size={25}
            color="black"
            onPress={() => navigation.navigate('Search' as never)}
          />
          <Ionicons
            name="settings"
            size={25}
            color="black"
            onPress={() => navigation.navigate('Setting' as never)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
