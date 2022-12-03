import React, { useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import { StyleSheet, View } from 'react-native';
import { useTheme } from "../context/ThemeContext";
import SignOut from "../components/auth/SignOut";
import Messages from '../components/Messages';

const Main = () => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <SideBar />
      <Messages />
      <SignOut />
    </View>
  );
}

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5
  },
});