import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import CategoryScreen from './CategoryScreen';
import CategoryDisplayScreen from './CategoryDisplayScreen';
import { BackgroundImage } from '@rneui/base';

const HomeScreenStack = () => {
    const Stack = createStackNavigator()
  return (

    <Stack.Navigator >
        <Stack.Screen name='HomeScreenStack' component={HomeScreen} options={{
            headerShown: false
        }}/>
        <Stack.Screen name='CategoryDisplay' component={CategoryDisplayScreen}  options={{
           headerStyle: {
               height: 50
           },
           headerTitleStyle: {
               fontSize: 20,
               alignContent: 'center'
           },
           headerBackAllowFontScaling: true,
           headerStatusBarHeight: 0,
           gestureDirection: "vertical"

        }}/>
    </Stack.Navigator>
  )
}

export default HomeScreenStack

const styles = StyleSheet.create({})