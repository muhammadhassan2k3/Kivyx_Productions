import {View, TextInput, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import { style } from './style';

const SearchScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={style.searchBarContianer}>
        <AntDesign
          name="arrowleft"
          size={30}
          color={'black'}
          onPress={() => navigation.goBack()}
        />
        <TextInput
          style={style.searchBarstyle}
          placeholder="Search Here"
          autoCorrect={false}
          placeholderTextColor={'gray'}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
