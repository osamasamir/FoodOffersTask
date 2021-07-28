import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react'
import { StyleSheet } from 'react-native'
const Stack = createStackNavigator<RootStackParamList>();
import NotFoundScreen from '../screens/NotFoundScreen';

export default function RootNavigator({childComponent}:{childComponent:FunctionComponent}) {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={childComponent} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
