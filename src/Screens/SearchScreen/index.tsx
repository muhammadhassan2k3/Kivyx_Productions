import {Dimensions, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
const DIMENSIONS = Dimensions.get('window');

const SearchScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <MaterialIcons
          name="arrow-back"
          size={34}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <View style={styles.searchBarContainer}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="search" size={24} color="black" />
          </View>
          <TextInput
            style={styles.SearchBarStyle}
            placeholder="Search"
            autoCorrect={false}
            placeholderTextColor={'black'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  mainContainer: {flexDirection: 'row', marginTop: 12},
  searchBarContainer: {
    alignSelf: 'center',
    borderRadius: 22,
    flexDirection: 'row',
    paddingHorizontal: 10,
    width: DIMENSIONS.width / 1.3,
    borderWidth: 1,
    marginLeft: 8,
  },
  iconContainer: {
    alignSelf: 'center',
    marginRight: 4,
  },
  SearchBarStyle: {
    fontSize: 20,
    fontWeight: '500',
    paddingVertical: 6,
  },
});
