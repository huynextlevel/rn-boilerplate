import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'

import { colors } from 'src/globals/styles'
import { BoxButtonContainer } from 'src/components/basics/buttons'

describe('BoxButtonContainer component unit test', () => {
  const onPressMock = jest.fn()

  beforeAll(() => {
    jest.clearAllMocks()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('calls onPress when clicked', () => {
    const { getByLabelText } = render(
      <BoxButtonContainer type="pri" size="large" onPress={onPressMock} />
    )
    fireEvent.press(getByLabelText('boxButton'))
    expect(onPressMock).toHaveBeenCalledTimes(1)
  })

  it('is disabled when isDisabled prop is true', () => {
    const { getByLabelText } = render(
      <BoxButtonContainer type="pri" size="large" isDisabled={true} onPress={onPressMock} />
    )
    fireEvent.press(getByLabelText('boxButton'))
    expect(onPressMock).not.toHaveBeenCalled()
  })

  it('renders correct width', () => {
    const { getByLabelText, rerender } = render(
      <BoxButtonContainer isFullWidth={true} type="pri" size="large" onPress={onPressMock} />
    )

    let button = getByLabelText('boxButton')
    expect(button).toBeOnTheScreen
    expect(button.props.style.width).toBe('100%')
  
    rerender(
      <BoxButtonContainer isFullWidth={false} type="pri" size="large" onPress={onPressMock} />
    )
    expect(button).toBeOnTheScreen
    expect(button.props.style.width).toBe('auto')
  })

  it('renders correct styles based on type prop', () => {
    const { getByLabelText, rerender } = render(
      <BoxButtonContainer type="pri" size="large" onPress={onPressMock} />
    )

    let button = getByLabelText('boxButton')
    expect(button).toBeOnTheScreen
    expect(button.props.style.backgroundColor).toBe(colors['blue'])

    rerender(<BoxButtonContainer type="sec" size="large" onPress={onPressMock} />)
    button = getByLabelText('boxButton')
    expect(button).toBeOnTheScreen
    expect(button.props.style.backgroundColor).toBe(colors['gray'])
  })
})

