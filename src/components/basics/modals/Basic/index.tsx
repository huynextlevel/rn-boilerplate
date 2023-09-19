import React, {
  useMemo,
  useState,
  forwardRef,
  useCallback,
  useImperativeHandle,
  ForwardRefRenderFunction
} from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native'
import Modal from 'react-native-modal'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Dimension } from 'src/utils'
import { colors } from 'src/globals/styles'

export type BasicModalHandle = {
  /**
   * @prop isVisible: state of modal
   */
  isVisible: boolean

  /**
   * @prop show: callback to show the modal
   */
  show: () => void

  /**
   * @prop close: callback to close the modal
   */
  close: () => void
}

export interface BasicModalProps {
  /**
   * @prop type: (popup, bottom) Type of BasicModal
   */
  type: 'popup' | 'bottom'

  /**
   * @prop children: Any items inside Modal
   */
  children: any

  /**
   * @prop modalStyle: (Optional) Additional style of modal container.
   */
  modalStyle?: ViewStyle

  /**
   * @prop containerStyle: (Optional) Additional style of content container inside modal.
   */
  containerStyle?: ViewStyle

  /**
   * @prop onClose: (Optional) Additional callback functions you want to excute when modal close
   */
  onClose?: (data?: any) => void

  /**
   * @prop onBackdropPress: (Optional) Callback function for close modal when click outside modal
   */
  onBackdropPress?: () => void
}

const BasicModal: ForwardRefRenderFunction<BasicModalHandle, BasicModalProps> = ({
  type,
  onClose,
  children,
  modalStyle,
  containerStyle,
  ...rest
}, ref) => {
  const insets = useSafeAreaInsets()
  const [isVisible, setIsVisible] = useState(false)

  const show = () => {
    setIsVisible(true)
  }

  const close = useCallback(() => {
    setIsVisible(false)
    onClose && onClose()
  }, [onClose])

  useImperativeHandle(ref, () => ({
    isVisible: isVisible,
    show: show,
    close: close
  }), [isVisible, show, close])

  const getModalStyle = useMemo(() => {
    if (type === 'popup') {
      return {
        container: '',
        item: 'popupItemContainer'
      }
    } else if (type === 'bottom') {
      return {
        container: 'bottomWrapper',
        item: 'bottomItemContainer'
      }
    }
  }, [type])

  return (
    <Modal
      {...rest}
      isVisible={isVisible}
      useNativeDriver={true}
      accessibilityLabel="basicModal"
      deviceHeight={Dimension.vertical}
      hideModalContentWhileAnimating={true}
      style={[styles[getModalStyle.container], modalStyle]}
    >
      <View
        style={[
          type === 'bottom' && { paddingBottom: insets.bottom },
          styles[getModalStyle.item],
          containerStyle
        ]}
      >
        {children}
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  popupItemContainer: {
    borderRadius: 10,
    paddingBottom: 20,
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  bottomWrapper: {
    flex: 1,
    zIndex: 10,
    elevation: 10,
    margin: 0,
    justifyContent: 'flex-end'
  },
  bottomItemContainer: {
    paddingTop: 30,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: colors.white
  }
})

export default forwardRef(BasicModal)
