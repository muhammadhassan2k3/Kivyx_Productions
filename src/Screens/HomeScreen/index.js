import {View, Text, Image, StyleSheet, TextInput, Platform} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import VideoList from '../VideoScreen';

const HomeScreen = () => {
  return (
    <View>
      <View style={style.headerContainer}>
        <Image
          style={style.headerLogo}
          source={require('../../../src/assets/roundIcon.png')}
        />
        <Text style={style.headerText}>NATURE PK</Text>
        <View style={style.searchBarContainer}>
          <View style={style.iconContainer}>
            <MaterialIcons name="search" size={20} color="red" />
          </View>
          <TextInput
            style={style.SearchBarStyle}
            placeholder="Search"
            placeholderTextColor={'red'}
          />
        </View>
      </View>
      <VideoList />
    </View>
  );
};

const style = StyleSheet.create({
  headerContainer: {
    marginLeft: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLogo: {
    width: 50,
    height: 50,
  },
  headerText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderRadius: 9,
    backgroundColor: 'gray',
    padding: 10,
    width: 190,
  },
  SearchBarStyle: {
    color: 'green',
    fontSize: 15,
    fontWeight: '500',
    paddingVertical: 6,
  },
  searchBarContainer: {
    alignSelf: 'center',
    backgroundColor: 'green',
    borderRadius: 22,
    flexDirection: 'row',
    marginVertical: 15,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === 'ios' ? 6 : 0,
    width: 200,
  },
  iconContainer: {
    alignSelf: 'center',
    marginRight: 4,
  },
});

export default HomeScreen;
