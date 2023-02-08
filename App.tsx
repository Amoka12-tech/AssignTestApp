/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './navigation/paramList';
import OboardingScreen from './screens/OboardingScreen';
import SetupProfileScreen from './screens/SetupProfileScreen';
import ProfileScreen from './screens/ProfileScreen';
import SplashScreen from 'react-native-splash-screen';

const splashImage = require('./assets/images/splash.png');

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createNativeStackNavigator<RootStackParamList>();

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer >
        <Stack.Navigator screenOptions={{ orientation: 'portrait', headerShown: false, }}>
          <Stack.Screen name='OboardingScreen' component={OboardingScreen} />
          <Stack.Screen name='SetupProfileScreen' component={SetupProfileScreen} />
          <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}



export default App;
