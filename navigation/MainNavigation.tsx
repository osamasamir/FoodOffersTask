import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import * as React from 'react';
import { useContext } from 'react';
import { ColorSchemeName } from 'react-native';
import { ScreenContext } from '../contexts/screeContext';
import AuthNavigation from './AuthNavigation';

import LinkingConfiguration from './LinkingConfiguration';
import RootNavigator from './RootNavigator';
// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function MainNavigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const screenContext=useContext(ScreenContext);
  // console.log(screenContext.currentScreen)
  if(screenContext.currentScreen == 'Auth'){
    return (
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootNavigator childComponent={AuthNavigation}/>
      </NavigationContainer>
    );
  
   }
  else{
    return (
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootNavigator childComponent={AuthNavigation}/>
      </NavigationContainer>
    );
  }
}

