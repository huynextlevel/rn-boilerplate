import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'

import { IScreen } from 'src/globals/types'
import { useScreenEventListener } from 'src/hooks'

const SplashScreen: React.FC<IScreen> = ({ navigation }) => {
  const onDidFocus = () => {
    setTimeout(() => navigation.navigate('Main'), 1000)
  }

  useScreenEventListener({
    navigation,
    listenerType: 'focus',
    callback: onDidFocus
  })

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 10 }}>SplashScreen</Text>
      <ActivityIndicator color="#000" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default SplashScreen
