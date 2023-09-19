import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { RadioButton } from 'src/components/basics/buttons'

import { colors } from 'src/globals/styles'

describe('RadioButton component unit test', () => {
  const onChangeMock = jest.fn()
  beforeAll(() => {
    jest.clearAllMocks()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should display the inner circle when selectedValue matches value', () => {
    const { getByLabelText } = render(
      <RadioButton 
        value="testValue"
        selectedValue="testValue"
        onChange={onChangeMock}
      />
    )

    expect(getByLabelText('innerCircle')).toBeOnTheScreen
    expect(getByLabelText('innerCircle')).toBeTruthy()
  })

  it('should not display the inner circle when selectedValue does not match value', () => {
    const { queryByLabelText } = render(
      <RadioButton 
        value="testValue"
        selectedValue="anotherValue"
        onChange={onChangeMock}
      />
    )

    expect(queryByLabelText('innerCircle')).toBeNull()
  })

  it('should call onChange callback with its value when pressed', () => {
    const { getByLabelText } = render(
      <RadioButton 
        value="testValue"
        selectedValue="anotherValue"
        onChange={onChangeMock}
      />
    )

    fireEvent.press(getByLabelText('radioButton'))
    expect(onChangeMock).toHaveBeenCalledWith('testValue')
  })

  it('should change outer circle border color based on isSelected value', () => {
    const { getByLabelText, rerender } = render(
      <RadioButton 
        value="testValue"
        selectedValue="testValue"
        onChange={onChangeMock}
      />
    )

    const outerCircle = getByLabelText('outerCircle')
    expect(outerCircle.props.style).toEqual(expect.arrayContaining([{ borderColor: colors['black'] }]))

    rerender(
      <RadioButton 
        value="testValue"
        selectedValue="anotherValue"
        onChange={onChangeMock}
      />
    )
    expect(outerCircle.props.style).toEqual(expect.arrayContaining([{ borderColor: colors['gray4'] }]))
  })

  it('should change inner circle background color based on isSelected value', () => {
    const { getByLabelText } = render(
      <RadioButton 
        value="testValue"
        selectedValue="testValue"
        onChange={onChangeMock}
      />
    )

    const innerCircle = getByLabelText('innerCircle')
    expect(innerCircle.props.style).toEqual(expect.arrayContaining([{ backgroundColor: colors['black'] }]))
  })
})
