import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const horizontal = width
const vertical = height

const horizontalPercent = (percent: number) => {
  return width * percent
}
const verticalPercent = (percent: number) => {
  return height * percent
}

const Dimension = {
  horizontal,
  vertical,
  horizontalPercent,
  verticalPercent
}

export default Dimension
