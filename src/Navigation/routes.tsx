import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AuthStack from '../Stacks/authStack';
import HomeStack from '../Stacks/homeStack';
import {AuthContext, AuthContextType} from './authProvider';
import Loading from '../Components/loding'

const Routes = () => {
  const {user, setUser} = useContext(AuthContext) as AuthContextType;
  console.log('user' ,user);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user: any) => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;