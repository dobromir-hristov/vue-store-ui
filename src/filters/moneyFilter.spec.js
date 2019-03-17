import { moneyFilter } from './moneyFilter'

describe('moneyFilter', () => {
  it('returns the money properly formatted', () => {
    expect(moneyFilter(55, 'USD')).toEqual('$55')
  })

  it('returns the currency if no symbol found', () => {
    expect(moneyFilter(55, 'ASD')).toEqual('ASD55')
  })
})
