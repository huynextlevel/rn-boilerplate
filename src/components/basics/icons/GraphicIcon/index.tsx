import React from 'react'
import { ViewStyle } from 'react-native'
import { SvgProps } from 'react-native-svg'

import graphicIcons from 'src/assets/svgs/graphics'

export interface GraphicIconProps extends SvgProps {
  /**
   * @prop name: svg file name from graphic icons
   */
  name: keyof typeof graphicIcons

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
   * @prop style: (Optional) additional style properties can be assigned via the style prop if needed
   */
  style?: ViewStyle
}

const GraphicIcon = ({
  name,
  width,
  style,
  height,
  size = 24,
  ...props
}: GraphicIconProps) => {
  const Svg = graphicIcons[name]

  return (
    <Svg
      {...props}
      accessibilityLabel="graphicIcon"
      width={width ? width : size}
      height={height ? height : size}
      style={style}
    />
  )
}

export default GraphicIcon
