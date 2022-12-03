import { Modal, Portal, Provider as PaperProvider, Provider } from 'react-native-paper';
import { StyleSheet, useColorScheme } from 'react-native';
import { useEffect, useState } from 'react';
import * as NavigationBar from 'expo-navigation-bar';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '../context/ThemeContext';

import Main from './Main';
import SignUp from '../components/auth/SignUp';
import Header from '../components/Header';
import Settings from './Settings';

const Wrapper = () => {

  const [settings, showSettings] = useState(false)

  useEffect(() => {
    NavigationBar.setButtonStyleAsync(dark ? 'light' : 'dark');
    NavigationBar.setBackgroundColorAsync(theme.colors.elevation.level2);
    NavigationBar.setBorderColorAsync(theme.colors.elevation.level2);
  });

  const Stack = createNativeStackNavigator();

  const { theme } = useTheme();

  const colorScheme = useColorScheme();
  const dark = colorScheme === 'dark';

  const styles = StyleSheet.create({
    settingsModal: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  });

  return (
    <PaperProvider theme={theme}>
      <StatusBar
        style={dark ? 'light' : 'dark'}
        animated
        backgroundColor={theme.colors.background}
      />
      <Header backBtn={false} title="title" menuBtn={true} onMenuBtn={() => showSettings(true)} />
      <Stack.Navigator initialRouteName='SignUp'>
        <Stack.Screen component={Main} name="Main" options={{ headerShown: false }} />
        <Stack.Screen component={SignUp} name="SignUp" options={{ headerShown: false }} />
      </Stack.Navigator>
      <Portal>
        <Modal
          visible={settings}
          onDismiss={() => showSettings(false)}
          contentContainerStyle={styles.settingsModal}>
          <Header
            backBtn
            onBackBtn={() => showSettings(false)}
            title="settings"
            menuBtn={false}
            statusBarHeight={0}
          />
          <Settings />
        </Modal>
      </Portal>
    </PaperProvider >
  )
};

export default Wrapper;