import { numberWithCommas } from 'src/utils'

describe('Helpers functions unit test', () => {
  describe('numberWithCommas', () => {
    it('should format number with commas', () => {
      expect(numberWithCommas(0)).toBe('0')
      expect(numberWithCommas(1234567)).toBe('1,234,567')
      expect(numberWithCommas('1234567')).toBe('1,234,567')
      expect(numberWithCommas(1234)).toBe('1,234')
      expect(numberWithCommas('1234')).toBe('1,234')
      expect(numberWithCommas(1000000)).toBe('1,000,000')
      expect(numberWithCommas(12)).toBe('12')
      expect(numberWithCommas('0000001234')).not.toBe('1,234')
    })

    it('should handle negative numbers', () => {
      expect(numberWithCommas(-1234567)).toBe('-1,234,567')
      expect(numberWithCommas('-1234567')).toBe('-1,234,567')
    })
  })
})