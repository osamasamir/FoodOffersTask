import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform,SafeAreaView,StyleSheet } from 'react-native';
import { useLocale } from '../hooks/useLocale';
import signInScreen from '../screens/Auth/signInScreen';
import AsyncStorage  from '@react-native-community/async-storage'

const AuthStack = createStackNavigator<AuthParamList>();
async function getlangauge (){
  const lang=await AsyncStorage.getItem("Lang")
  return lang
}
export default  function AuthNavigation() {
  getlangauge().then((value)=>{
  const lang=value
  })
  return (
    <SafeAreaView style={styles.container} >
      <AuthStack.Navigator>
      <AuthStack.Screen
        name="SingInScreen"
        component={signInScreen}
        options={{
          headerShown:false,
          headerTitle: 'SingInScreen',
          headerTitleAlign:"center",headerStatusBarHeight:0,
          headerStyle:styles.headerstyle,
          headerTitleStyle:styles.headertitle,
 }}
      />
    </AuthStack.Navigator>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  headerstyle: {
    backgroundColor:'#05948B',
  },  
  headertitle:{
    color:"white",
    fontSize:24,
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0    
    
  },    


})


