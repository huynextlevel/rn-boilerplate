import { Dimension } from 'src/utils'

jest.mock('react-native', () => ({
  Dimensions: {
    get: jest.fn().mockReturnValue({ width: 400, height: 800 }),
  },
}))

describe('Dimension utility unit test', () => {
  beforeAll(() => {
    jest.clearAllMocks()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('gets correct horizontal dimension', () => {
    expect(Dimension.horizontal).toBe(400)
  })

  it('gets correct vertical dimension', () => {
    expect(Dimension.vertical).toBe(800)
  })

  it('calculates horizontal percent correctly', () => {
    // 50% of 400 is 200
    expect(Dimension.horizontalPercent(0.5)).toBe(200)
    // 25% of 400 is 100
    expect(Dimension.horizontalPercent(0.25)).toBe(100)
  })

  it('calculates vertical percent correctly', () => {
    // 50% of 800 is 400
    expect(Dimension.verticalPercent(0.5)).toBe(400)
    // 25% of 800 is 200
    expect(Dimension.verticalPercent(0.25)).toBe(200)
  })
})
