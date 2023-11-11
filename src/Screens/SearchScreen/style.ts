import {Dimensions, StyleSheet} from 'react-native';
const DIMENSIONS = Dimensions.get('window');

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

export default styles;
