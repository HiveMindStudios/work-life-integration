import React, { useContext, useState, useEffect } from 'react'
import { useColorScheme } from 'react-native';
import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';

const ThemeContext = React.createContext()

export function useTheme(){
    return useContext(ThemeContext)
}

export default function ThemeProvider({ children }) {
    const colorScheme = useColorScheme();
    const dark = colorScheme === 'dark';
    const [DefaultTheme] = useState(dark ? MD3DarkTheme : MD3LightTheme);

    const [theme, setTheme] = useState({
            ...DefaultTheme,
            roundness: 4,
            version: 3,
            colors: {
              ...DefaultTheme.colors,
            }
    })

  return (
    <ThemeContext.Provider value={{theme:theme, setTheme:setTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}
