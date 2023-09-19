import React from 'react'
import { render } from '@testing-library/react-native'

import { colors } from 'src/globals/styles'
import { BasicIcon } from 'src/components/basics/icons'

jest.mock('src/assets/svgs/basics', () => ({
  ic_camera: 'ic_camera'
}))

describe('BasicIcon component unit test', () => {
  beforeAll(() => {
    jest.clearAllMocks()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the icon with given name', () => {
    const { getByLabelText } = render(<BasicIcon name="ic_camera" />)
    expect(getByLabelText('basicIcon')).toBeOnTheScreen
  })

  it('applies custom size', () => {
    const size = 40
    const { getByLabelText } = render(<BasicIcon name="ic_camera" size={size} />)
    const icon = getByLabelText('basicIcon')

    expect(icon).toBeOnTheScreen
    expect(icon.props.width).toEqual(size)
    expect(icon.props.height).toEqual(size)
  })

  it('applies custom width and height over size', () => {
    const { getByLabelText } = render(<BasicIcon name="ic_camera" width={50} height={60} size={40} />)
    const icon = getByLabelText('basicIcon')

    expect(icon).toBeOnTheScreen
    expect(icon.props.width).toEqual(50)
    expect(icon.props.height).toEqual(60)
  })

  it('applies fill color correctly', () => {
    const { getByLabelText } = render(<BasicIcon name="ic_camera" color="gray1" />);
    const icon = getByLabelText('basicIcon')

    expect(icon).toBeOnTheScreen
    expect(icon.props.fill).toEqual(colors['gray1'])
  })
})
