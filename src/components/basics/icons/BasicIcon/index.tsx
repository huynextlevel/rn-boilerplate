import React from 'react'

import { ViewStyle } from 'react-native'
import { SvgProps } from 'react-native-svg'

import { colors } from 'src/globals/styles'
import basicIcons from 'src/assets/svgs/basics'

export interface BasicIconProps extends SvgProps {
  /**
   * @prop name: svg file name from basic icons
   */
  name: keyof typeof basicIcons

  /**
   * @prop size: (Optional) width and height value, width and height can be implented seperately, will override size value
   * @default 24
   */
  size?: number

  /**
   * @prop width: (Optional) width of the icon, uses size default value(24)
   */
  width?: number

  /**
   * @prop height: (Optional) height of the icon, uses size default value(24)
   */
  height?: number

  /**
   * @prop color: (Optional) fill value for svg
   */
  color?: keyof typeof colors

  /**
   * @prop sColor: (Optional) stroke value for svg
   */
  sColor?: keyof typeof colors

  /**
   * @prop style: (Optional) additional style properties can be assigned via the style prop if needed
   */
  style?: ViewStyle
}

const BasicIcon = ({
  name,
  width,
  style,
  height,
  size = 24,
  color,
  sColor,
  ...props
}: BasicIconProps) => {
  const Svg = basicIcons[name]

  return (
    <Svg
      {...props}
      accessibilityLabel="basicIcon"
      width={width ? width : size}
      height={height ? height : size}
      style={style}
      {...(color && { fill: colors[color] })}
      {...(sColor && { stroke: colors[sColor] })}
    />
  )
}

export default BasicIcon
