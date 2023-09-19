import React from 'react'
import { Text, TextStyle, StyleProp } from 'react-native'

import { colors } from 'src/globals/styles'
import { fontWeights, textAlign } from 'src/components/globals'

export interface TypographyProps {
  /**
   * @prop color: Color of text
   */
  color?: keyof typeof colors

  /**
   * @prop weight: Weight of text
   */
  weight?: keyof typeof fontWeights

  /**
   * @prop align: Align position of text
   */
  align?: keyof typeof textAlign

  /**
   * @prop size: Size of text
   */
  size?: number

  /**
   * @prop extraColor: Additional color when you want to use different color in the design system
   */
  extraColor?: string

  /**
   * @prop children: Any items inside typography
   */
  children: any

  /**
   * @prop style: (Optional) Additional style of typography.
   */
  style?: StyleProp<TextStyle>
}

const Typography = ({
  size,
  style,
  children,
  extraColor,
  align = 'left',
  color = 'gray3',
  weight = 'regular',
}: TypographyProps) => {
  const textWeight = fontWeights[weight] as any

  return (
    <Text
      allowFontScaling={false}
      style={Object.assign(
        {},
        {
          flexShrink: 1,
          fontFamily: 'System',
          color: extraColor ? extraColor : colors[color],
          fontWeight: textWeight,
          fontSize: size,
          textAlign: textAlign[align],
          flexWrap: 'wrap'
        },
        style
      )}
      accessibilityLabel="typography"
    >
      {children}
    </Text>
  )
}

export default Typography
