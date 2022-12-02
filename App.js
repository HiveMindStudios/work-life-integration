import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './context/AuthContext';
import ThemeProvider from './context/ThemeContext';
import Wrapper from './pages/Wrapper';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <ThemeProvider>
            <Wrapper />
          </ThemeProvider>
        </SafeAreaProvider>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
