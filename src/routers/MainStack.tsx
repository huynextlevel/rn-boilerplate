import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import { globalStyles } from 'src/globals/styles'

import HomeScreen from 'src/screens/Home'

const MainStack = createStackNavigator()

function MainStackScreen() {
  return (
    <MainStack.Navigator
      initialRouteName="BookingScreen"
      screenOptions={{
        headerShown: true,
        gestureEnabled: false,
        headerBackTitleVisible: false,
        headerStyle: globalStyles.headerStyle,
        headerTitleStyle: globalStyles.headerTitle,
        headerRightContainerStyle: globalStyles.headerRightContainer
      }}
    >
      <MainStack.Screen
        name="BookingScreen"
        component={HomeScreen}
        options={{
          gestureEnabled: true,
          headerTitle: 'Home',
          headerLeft: () => <View />
        }}
      />
    </MainStack.Navigator>
  )
}

export default MainStackScreen