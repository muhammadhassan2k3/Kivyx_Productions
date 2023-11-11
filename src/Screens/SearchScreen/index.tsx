import {TextInput, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import styles from './style';

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
