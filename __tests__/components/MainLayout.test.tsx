import React from 'react'
import { Text } from 'react-native'
import { render } from '@testing-library/react-native'
import { MainLayout } from 'src/components/layouts'

describe('MainLayout component unit test', () => {
  beforeAll(() => {
    jest.clearAllMocks()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly', () => {
    const { getByText, UNSAFE_getByType } = render(
      <MainLayout>
        <Text>Test Main Layout</Text>
      </MainLayout>
    )
    const component = UNSAFE_getByType(MainLayout)
    const textCompoent = getByText('Test Main Layout')

    expect(component).toBeOnTheScreen
    expect(textCompoent).toBeOnTheScreen
    expect(textCompoent).toBeTruthy()
  })

  it('applies custom styles', () => {
    const { UNSAFE_getByType } = render(
      <MainLayout style={{ backgroundColor: 'red' }}>
        <Text>Test Main Layout</Text>
      </MainLayout>
    )
    const component = UNSAFE_getByType(MainLayout)

    expect(component).toBeOnTheScreen
    expect(component.props.style.backgroundColor).toEqual('red')
  })

  it('updates edges correctly', () => {
    const { UNSAFE_getByType } = render(
      <MainLayout edges={['top', 'bottom']}>
        Child with Edges
      </MainLayout>
    )
    const component = UNSAFE_getByType(MainLayout)

    expect(component).toBeOnTheScreen
    expect(component.props.edges).toEqual(['top', 'bottom'])
  })
})
