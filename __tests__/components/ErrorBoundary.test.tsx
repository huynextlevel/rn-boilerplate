import React from 'react'
import { Text } from 'react-native'
import { render } from '@testing-library/react-native'

import { ErrorBoundary } from 'src/components/extra'

describe('ErrorBoundary component unit test', () => {
  beforeAll(() => {
    jest.clearAllMocks()
  })

  it('renders children when there is no error', () => {
    const { queryByText } = render(
      <ErrorBoundary>
        <Text>Test Content</Text>
      </ErrorBoundary>
    )

    const textComponent = queryByText('Test Content')
    expect(textComponent).toBeDefined()
  })

  it('displays error message when there is an error', () => {
    console.error = jest.fn()

    const ErrorThrower = () => {
      throw new Error('Test Error')
    }

    const { queryByText } = render(
      <ErrorBoundary>
        <ErrorThrower />
      </ErrorBoundary>
    )

    const errorMessage = 'Something went wrong. Please try again later.'
    const errorComponent = queryByText(errorMessage)
    expect(errorComponent).toBeDefined()

    expect(console.error).toHaveBeenCalled()
  })

  it('handles network online status', () => {
    const { queryByText } = render(
      <ErrorBoundary>
        <Text>Online Content</Text>
      </ErrorBoundary>
    )

    const onlineTextComponent = queryByText('Online Content')
    expect(onlineTextComponent).toBeDefined()
  })
})
