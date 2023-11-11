import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: 'center',
  },
  loginScreenContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  SignUpText: {
    fontSize: 20,
    fontWeight: '400',
    marginTop: 30,
    textAlign: 'center',
  },
  SignUpButton: {
    color: '#3897f1',
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 17,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    width: 350,
    alignItems: 'center',
  },
});
export default styles;
