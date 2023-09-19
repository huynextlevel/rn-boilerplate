import React from 'react'
import { render } from '@testing-library/react-native'

import { fontWeights } from 'src/components/globals'
import { Typography } from 'src/components/basics/typographies'

describe('Typography component unit test', () => {
  it('renders default props correctly', () => {
    const { getByText } = render(<Typography>Unit Test</Typography>)
    const typographyComponent = getByText('Unit Test')

    expect(typographyComponent).toBeOnTheScreen
    expect(typographyComponent.props.style.textAlign).toBe('left')
    expect(typographyComponent.props.style.fontWeight).toBe(fontWeights['regular'])
  })

  it('renders custom font weight correctly', () => {
    const { getByText } = render(<Typography weight="bold">Unit Test</Typography>)
    const typographyComponent = getByText('Unit Test')

    expect(typographyComponent.props.style.fontWeight).toBe(fontWeights['bold'])
    expect(typographyComponent).toBeOnTheScreen
  })

  it('renders custom text size correctly', () => {
    const size = 14
    const { getByText } = render(<Typography size={size}>Unit Test</Typography>)
    const typographyComponent = getByText('Unit Test')

    expect(typographyComponent.props.style.fontSize).toBe(size)
    expect(typographyComponent).toBeOnTheScreen
  })

  it('renders with extraColor prop correctly', () => {
    const { getByText } = render(<Typography extraColor="#FF5733">Unit Test</Typography>)
    const typographyComponent = getByText('Unit Test')

    expect(typographyComponent.props.style.color).toBe('#FF5733')
    expect(typographyComponent).toBeOnTheScreen
  })

  it('applies additional styles from the style prop', () => {
    const { getByText } = render(<Typography style={{ textDecorationLine: 'underline' }}>Unit Test</Typography>)
    const typographyComponent = getByText('Unit Test')

    expect(typographyComponent.props.style.textDecorationLine).toBe('underline')
    expect(typographyComponent).toBeOnTheScreen
  })
})
