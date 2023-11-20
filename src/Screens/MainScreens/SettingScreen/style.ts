import {Dimensions, StyleSheet} from 'react-native';
import { Theme } from '../../../Theming/themeProvider';
const Width = Dimensions.get('window').width;

export const styles = (theme: Theme) => StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.THEME,
  },
  containerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  textStyle: {
    color: theme.colors.TEXT,
    fontSize: theme.typography.size.M,
    fontWeight: '600',
  },
});
