import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  welcomeText: {
    color: 'black',
    fontSize: 45,
    fontWeight: '900',
    marginTop: 70,
    marginLeft: 40,
    width: 200,
  },
  signupScreenContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  signupFormView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupFormTextInput: {
    color: '#000',
    height: 60,
    width: 300,
    fontSize: 18,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    backgroundColor: '#bdc3c7',
    padding: 17,
    marginTop: 5,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signinButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    width: 300,
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  upperSignupText: {
    fontSize: 18,
    marginTop: 15,
  },
  signupText: {
    fontWeight: '900',
    color: '#000',
    fontSize: 30,
  },
  innerSignupText: {
    color: '#3897f1',
    fontWeight: '600',
  },
});

export default styles;
