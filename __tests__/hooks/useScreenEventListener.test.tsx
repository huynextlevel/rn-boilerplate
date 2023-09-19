import React from 'react'
import { render, act } from '@testing-library/react-native'
import { useScreenEventListener } from 'src/hooks'

describe('useScreenEventListener', () => {
  // Mock the navigation object and its methods
  const mockAddListener = jest.fn()
  const mockRemoveListener = jest.fn()
  const mockNavigation = {
    addListener: mockAddListener.mockImplementation(() => mockRemoveListener)
  }

  const mockCallback = jest.fn()

  function TestComponent() {
    useScreenEventListener({
      navigation: mockNavigation,
      listenerType: 'focus',
      callback: mockCallback
    })
    return null
  }

  beforeEach(() => {
    mockAddListener.mockClear()
    mockRemoveListener.mockClear()
    mockCallback.mockClear()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should add the listener when mounted', () => {
    render(<TestComponent />)

    expect(mockAddListener).toHaveBeenCalledWith('focus', expect.any(Function))
  })

  it('should not add the listener if navigation is undefined', () => {
    function ComponentWithoutNavigation() {
      useScreenEventListener({
        navigation: undefined,
        listenerType: 'focus',
        callback: mockCallback
      });
      return null;
    }
  
    render(<ComponentWithoutNavigation />);
  
    expect(mockAddListener).not.toHaveBeenCalled();
  })

  it('should call the callback when the listener is triggered', () => {
    render(<TestComponent />)

    const callListener = mockAddListener.mock.calls[0][1]
    act(() => {
      callListener()
    })

    expect(mockCallback).toHaveBeenCalled()
    expect(mockCallback).toHaveBeenCalledTimes(1)
  })

  it('should remove the listener when unmounted', () => {
    const { unmount } = render(<TestComponent />)
    unmount()

    expect(mockRemoveListener).toHaveBeenCalled()
    expect(mockRemoveListener).toHaveBeenCalledTimes(1)
  })
})
