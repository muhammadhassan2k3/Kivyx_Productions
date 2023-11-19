import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  topContainer: {
    width: SCREEN_WIDTH,
    height: 300,
  },
  loginScreenContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  welcomeText: {
    color: 'black',
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
  loginFormTextInput: {
    color: '#000',
    height: 60,
    width: 300,
    fontSize: 18,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    backgroundColor: '#bdc3c7',
    padding: 20,
    marginTop: 5,
    marginBottom: 10,
  },
  loginError: {
    color: 'red',
    textAlign: 'left'
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
    color: '#000',
    fontSize: 30,
  },
  upperSignupText: {
    fontSize: 18,
    marginTop: 15,
  },
  signupText: {
    color: '#3897f1',
    fontWeight: '600',
  },
  forgotPasswrodText: {
    color: '#3897f1',
    fontWeight: '600',
    fontSize: 20,
    marginTop: 10,
  },
});
export default styles;
