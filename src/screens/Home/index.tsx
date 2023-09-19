import React from 'react'
import { View, StyleSheet } from 'react-native'

import { Welcome } from 'src/systems'

const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <Welcome />
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

export default HomeScreen
