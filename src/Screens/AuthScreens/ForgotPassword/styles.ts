import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  welcomeText: {
    color: 'black',
    fontSize: 46,
    fontWeight: '900',
    top: 100,
    width: 250,
    marginLeft: 40,
  },
  signupScreenContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  signupFormView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupFormTextInput: {
    color: '#000',
    height: 60,
    width: 300,
    fontSize: 18,
    borderRadius: 20,
    backgroundColor: '#bdc3c7',
    padding: 20,
  },
  invalidEmail:{
    color: 'red',
    marginTop: 10,
  },
  signinButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 290,
    marginTop: 20,
  },
  signupText: {
    fontWeight: '900',
    color: '#000',
    fontSize: 30,
  },
  upperSignupText: {
    fontSize: 18,
    marginTop: 15,
  },
  innerSignupText: {
    color: '#3897f1',
    fontWeight: '600',
  },
  signupButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 60,
    width: 280,
  },
  signinText: {
    color: '#000',
    fontWeight: '900',
    fontSize: 15,
    backgroundColor: '#0B7EE885',
    padding: 10,
    borderRadius: 10,
  },
});
export default styles;
