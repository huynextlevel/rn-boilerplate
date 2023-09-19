import React from 'react'

import { Typography } from 'src/components/basics/typographies'
import { TypographyProps } from 'src/components/basics/typographies/Typography'

import BoxButtonContainer from '../BoxButtonCointainer'
import { BoxButtonContainerProps } from '../BoxButtonCointainer'

type ButtonTypographyProps = Pick<TypographyProps, 'size' | 'color' | 'weight'>

export interface BoxTextButtonProps extends BoxButtonContainerProps {
  /**
   * @prop label: Label of button
   */
  label: string

  textSize?: ButtonTypographyProps['size']
  textColor?: ButtonTypographyProps['color']
  textWeight?: ButtonTypographyProps['weight']
}

const BoxTextButton = ({
  type,
  size,
  style,
  isDisabled,
  buttonRadius = 100,
  isFullWidth = true,
  label,
  textSize = 17,
  textColor = 'white',
  textWeight = 'bold',
  onPress
}: BoxTextButtonProps) => {
  return (
    <BoxButtonContainer
      type={type}
      size={size}
      style={style}
      onPress={onPress}
      isDisabled={isDisabled}
      isFullWidth={isFullWidth}
      buttonRadius={buttonRadius}
    >
      <Typography size={textSize} weight={textWeight} color={textColor} align="center">
        {label}
      </Typography>
    </BoxButtonContainer>
  )
}

export default BoxTextButton
