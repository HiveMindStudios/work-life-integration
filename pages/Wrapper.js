import {
  Provider as PaperProvider,
  MD3DarkTheme,
  MD3LightTheme,
} from 'react-native-paper';
import { StyleSheet, useColorScheme } from 'react-native';
import { useEffect } from 'react';
import * as NavigationBar from 'expo-navigation-bar';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '../context/ThemeContext';

import Main from './Main';
import SignUp from '../components/auth/SignUp';
import Header from '../components/Header';

const Wrapper = () => {

  useEffect(() => {
    NavigationBar.setButtonStyleAsync(dark ? 'light' : 'dark');
    NavigationBar.setBackgroundColorAsync(theme.colors.elevation.level2);
    NavigationBar.setBorderColorAsync(theme.colors.elevation.level2);
  });

  const Stack = createNativeStackNavigator();

  const {theme} = useTheme();

  const colorScheme = useColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <PaperProvider>
      <StatusBar
        style={dark ? 'light' : 'dark'}
        animated
      />
      <Header backBtn={false} title="title" />
      <Stack.Navigator initialRouteName='SignUp'>
        <Stack.Screen component={Main} name="Main" />
        <Stack.Screen component={SignUp} name="SignUp" />
        {/* options={{headerShown: false}} */}
      </Stack.Navigator>
    </PaperProvider>
  )
};

export default Wrapper;