import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MainStack from './MainStack'
import SplashScreen from 'src/screens/Splash'

const Stack = createStackNavigator()

export default function NavigatorView() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="Main"
        component={MainStack}
        options={{
          headerShown: false,
          gestureEnabled: false
        }}
      />
    </Stack.Navigator>
  )
}
