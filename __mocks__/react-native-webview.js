jest.mock('react-native-webview', () => ({
  default: () => jest.fn()
}))