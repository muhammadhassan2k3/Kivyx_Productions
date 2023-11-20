import React, {useEffect} from 'react';

import ThemeProvider from './src/Theming/themeProvider';
import SplashScreen from 'react-native-splash-screen';
import Providers from './src/Navigation/Providers';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider>
      <Providers />
    </ThemeProvider>
  );
};

export default App;