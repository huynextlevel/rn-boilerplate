import React from 'react'
import { Platform } from 'react-native'
import { WebView, WebViewProps } from 'react-native-webview'

export interface WebviewProps extends WebViewProps {
  /**
   * @prop url: The URL of website
   */
  url: string
}

const WebviewComponent = ({ url, ...rest }: WebviewProps) => {
  return (
    <WebView
      {...rest}
      javaScriptEnabled
      domStorageEnabled
      startInLoadingState
      style={{ flex: 1 }}
      source={{ uri: url }}
      originWhitelist={['*']}
      accessibilityLabel="webview-component"
      setSupportMultipleWindows={false}
      {...(Platform.OS === 'android' && { userAgent: 'undefined' })}
    />
  )
}

export default WebviewComponent
