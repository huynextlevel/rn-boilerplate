import React from 'react'
import { StyleSheet, TouchableOpacity, ViewStyle, TouchableOpacityProps } from 'react-native'

import { colors } from 'src/globals/styles'

export interface BoxButtonContainerProps extends TouchableOpacityProps {
  /**
   * @prop type: (pri, sec) Type of BoxButton
   */
  type: 'pri' | 'sec'

  /**
   * @prop size: (large, small, xsmall) Size of BoxButton
   */
  size: 'large'

  /**
   * @prop style: (Optional) Additional style of container.
   */
  style?: ViewStyle

  /**
   * @prop children: Any items inside button
   */
  children?: any

  /**
   * @prop isDisabled: (Optional) Set to true if button should be in disabled state.
   * @default false
   */
  isDisabled?: boolean

  /**
   * @prop buttonRadius: Radius of BoxButton
   * @default 100
   */
  buttonRadius?: number

  /**
   * @prop isFullWidth: Set to false if button width fit content
   * @default true
   */
  isFullWidth?: boolean

  /**
   * @prop enableActiveOpacity: (Optional) To enable activeOpacity.
   * @default true
   */
  enableActiveOpacity?: boolean

  /**
   * @prop onPress: Callback function.
   */
  onPress: (data?: any) => void
}

const BoxButtonContainer = ({
  type,
  size,
  style,
  children,
  isDisabled = false,
  buttonRadius = 100,
  isFullWidth = true,
  enableActiveOpacity = true,
  onPress,
  ...rest
}: BoxButtonContainerProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      accessibilityLabel="boxButton"
      activeOpacity={enableActiveOpacity ? 0.5 : 1}
      style={{
        ...buttonStyles[type]({
          size,
          type,
          buttonRadius,
          isDisabled,
          isFullWidth
        }).root,
        ...style
      }}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  )
}

const containerHeight = {
  large: 48
}

const containerColor = {
  pri: colors.blue,
  sec: colors.gray
}

const containerPaddingHorizontal = {
  large: 20
}

const mainContainer = ({
  size,
  type,
  buttonRadius,
  isDisabled,
  isFullWidth
}: {
  size: BoxButtonContainerProps['size']
  type: BoxButtonContainerProps['type']
  buttonRadius: BoxButtonContainerProps['buttonRadius']
  isDisabled: BoxButtonContainerProps['isDisabled']
  isFullWidth: BoxButtonContainerProps['isFullWidth']
}) => StyleSheet.create({
  root: {
    flexShrink: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: buttonRadius,
    height: containerHeight[size],
    width: isFullWidth ? '100%' : 'auto',
    paddingHorizontal: containerPaddingHorizontal[size],
    backgroundColor: isDisabled ? colors.gray5 : containerColor[type]
  }
})

const buttonStyles = {
  pri: mainContainer,
  sec: mainContainer
}

export default BoxButtonContainer
