import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScreenContext } from './contexts/screeContext';
// import { ScreenContext } from './contexts/screenContext';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation/MainNavigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
const [currentScreen, setCurrentScreen] = useState<CurrentScreen>('Auth')
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
         <ScreenContext.Provider value={{currentScreen,setCurrentScreen}}> 

        <Navigation colorScheme={colorScheme} />
        <StatusBar />
         </ScreenContext.Provider> 
      </SafeAreaProvider>
    );
  }
}
