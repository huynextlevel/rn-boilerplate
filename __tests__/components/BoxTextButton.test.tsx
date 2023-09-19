import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'

import { colors } from 'src/globals/styles'
import { fontWeights } from 'src/components/globals'
import { BoxTextButton } from 'src/components/basics/buttons'

describe('BoxTextButton component unit test', () => {
  const onPressMock = jest.fn()

  beforeAll(() => {
    jest.clearAllMocks()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders with the provided label', () => {
    const { getByText } = render(
      <BoxTextButton label="Test Button" onPress={onPressMock} type="pri" size="large" />
    )
    expect(getByText('Test Button')).toBeTruthy()
  })

  it('triggers onPress when clicked', () => {
    const { getByText } = render(
      <BoxTextButton label="Test Button" onPress={onPressMock} type="pri" size="large" />
    )
    fireEvent.press(getByText('Test Button'))
    expect(onPressMock).toHaveBeenCalledTimes(1)
  })

  it('does not trigger onPress when isDisabled is true', () => {
    const { getByText } = render(
      <BoxTextButton
        label="Test Button"
        onPress={onPressMock}
        type="pri"
        size="large"
        isDisabled={true}
      />
    )
    fireEvent.press(getByText('Test Button'))
    expect(onPressMock).not.toHaveBeenCalled()
  })

  it('passes correct props to Typography', () => {
    const { getByLabelText } = render(
      <BoxTextButton
        label="Test Button"
        onPress={onPressMock}
        type="pri"
        size="large"
        textSize={17}
        textColor="gray3"
        textWeight="bold"
      />
    )

    const typographyComponent = getByLabelText('typography')
    expect(typographyComponent).toBeOnTheScreen
    expect(typographyComponent.props.style.fontSize).toBe(17)
    expect(typographyComponent.props.style.color).toBe(colors['gray3'])
    expect(typographyComponent.props.style.fontWeight).toBe(fontWeights['bold'])
  })
})

