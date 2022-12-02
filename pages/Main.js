import { Button, Text } from "react-native-paper";
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import { StyleSheet, useColorScheme, View } from 'react-native';

const Main = ({ theme }) => {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    settingsModal: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    addEventModal: {
      backgroundColor: theme.colors.background,
      padding: 20,
      margin: 20,
    },
  });

  return (
    <View style={styles.container}>
      <Header backBtn={false} title="title" />
      <SideBar />

      <Button>Hello</Button>
    </View>
  );
}

export default Main;