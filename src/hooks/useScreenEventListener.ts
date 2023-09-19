import { useEffect, useRef } from 'react'

interface UseScreenEventListenerParams {
  navigation: any
  listenerType: 'focus' | 'blur' | 'willFocus' | 'willBlur'
  callback: () => void
}

const useScreenEventListener = ({
  navigation,
  listenerType,
  callback
}: UseScreenEventListenerParams) => {
  const navigationRef = useRef<any>(navigation)
  const callbackRef = useRef<any>()
  const listenerRef = useRef<any>()

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (navigationRef && navigationRef.current) {
      listenerRef.current = navigationRef.current.addListener(
        listenerType,
        () => {
          callbackRef.current()
        }
      )
    }
    return () => {
      listenerRef.current && listenerRef.current()
    }
  }, [navigationRef])
}

export default useScreenEventListener
