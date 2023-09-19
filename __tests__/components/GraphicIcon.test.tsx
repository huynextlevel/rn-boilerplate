import React from 'react'
import { render } from '@testing-library/react-native'
import { GraphicIcon } from 'src/components/basics/icons'

jest.mock('src/assets/svgs/graphics', () => ({
  graphic_success_check: 'graphic_success_check'
}))

describe('GraphicIcon component unit test', () => {
  beforeAll(() => {
    jest.clearAllMocks()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the icon with given name', () => {
    const { getByLabelText } = render(<GraphicIcon name="graphic_success_check" />)
    expect(getByLabelText('graphicIcon')).toBeOnTheScreen
  })

  it('applies custom size', () => {
    const size = 40
    const { getByLabelText } = render(<GraphicIcon name="graphic_success_check" size={size} />)
    const icon = getByLabelText('graphicIcon')

    expect(icon).toBeOnTheScreen
    expect(icon.props.width).toEqual(size)
    expect(icon.props.height).toEqual(size)
  })

  it('applies custom width and height over size', () => {
    const { getByLabelText } = render(<GraphicIcon name="graphic_success_check" width={50} height={60} size={40} />)
    const icon = getByLabelText('graphicIcon')

    expect(icon).toBeOnTheScreen
    expect(icon.props.width).toEqual(50)
    expect(icon.props.height).toEqual(60)
  })
})
