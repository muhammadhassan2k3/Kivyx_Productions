import {View, Text, Image, SafeAreaView} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import useThemedStyles from '../../Theming/useThemedStyles';

const HomeScreen = () => {
  const style = useThemedStyles(styles);

  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={style.headerContainer}>
        <View style={style.innerHeaderContainer}>
          <Image
            style={style.headerLogo}
            source={require('../../../src/assets/kivyxLogo.png')}
          />
          <Text style={style.headerText}>Kivyx</Text>
        </View>
        <View style={style.iconContainer}>
          <MaterialIcons
            name="search"
            size={35}
            color="black"
            onPress={() => {
              navigation.navigate('Search' as never);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
