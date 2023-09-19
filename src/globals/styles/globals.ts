import { StyleSheet } from 'react-native'
import colors from './colors'

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: colors.white
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.black
  },
  headerRightContainer: {
    paddingRight: 23
  }
})

export default globalStyles
