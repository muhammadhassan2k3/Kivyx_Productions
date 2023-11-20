import {StyleSheet, Dimensions} from 'react-native';
import { Theme } from '../../../Theming/themeProvider';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const styles = (theme: Theme) => StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: theme.colors.BACKGROUND,
  },
  topContainer: {
    width: SCREEN_WIDTH,
    height: 300,
  },
  loginScreenContainer: {
    flex: 1,
  },
  welcomeText: {
    color: theme.colors.TEXT,
    fontSize: 45,
    fontWeight: '900',
    marginTop: 70,
    marginLeft: 40,
    width: 250,
  },
  loginFormView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInputContiner: {
    height: 60,
    width: 300,
    fontSize: 18,
    borderRadius: 20,
    backgroundColor: theme.colors.TEXTINPUTCONTAINER,
    padding: 17,
    marginTop: 5,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  loginError: {
    color: theme.colors.ERROR,
    textAlign: 'left',
  },
  signinButtonContainer: {
    justifyContent: 'space-between',
    borderRadius: 15,
    flexDirection: 'row',
    width: '70%',
    marginTop: 10,
  },
  signinText: {
    fontWeight: '900',
    color: theme.colors.TEXT,
    fontSize: 30,
  },
  upperSignupText: {
    fontSize: 18,
    marginTop: 15,
    color: theme.colors.TEXT,
  },
  signupText: {
    color: theme.colors.BLUEBUTTON,
    fontWeight: '600',
  },
  forgotPasswrodText: {
    color: theme.colors.BLUEBUTTON,
    fontWeight: '600',
    fontSize: 20,
    marginTop: 10,
  },
});
export default styles;
