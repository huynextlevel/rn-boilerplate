import React from 'react'
import { View } from 'react-native'

import { Typography } from 'src/components/basics/typographies'

interface State {
  hasError: boolean
}

export interface ErrorBoundaryProps {
  /**
   * @prop children: Any items in Error boundary
   */
  children?: any
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log the error to an error reporting service, e.g., Sentry, LogRocket, etc.
    console.error('Uncaught error, check here:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Typography size={14} color="gray3" weight="bold" align="center">
            Something went wrong. Please try again later.
          </Typography>
        </View>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
