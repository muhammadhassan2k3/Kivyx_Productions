import {StyleSheet} from 'react-native';

import {Theme} from '../../Theming/themeProvider';

const styles = (theme: Theme) =>
  StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 10,
      marginTop: 7,
    },
    innerHeaderContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
    },
    headerLogo: {
      width: 55,
      height: 45,
      borderRadius: 15,
      marginTop: 3,
    },
    headerText: {
      color: theme.colors.SEARCHBAR,
      fontSize: 40,
      fontWeight: 'bold',
      marginLeft: 2,
    },
    iconContainer: {
      alignSelf: 'center',
    },
  });

export default styles;
