import { calculate } from './product'

describe('calculate product price', () => {
  const products = [
    { code: '1234', name: 'AirPods', price: 1288, count: 1 },
    { code: '4321', name: 'BeatsX', price: 1188, count: 1 },
  ]

  it('should return total price when given products', () => {
    const price = calculate(products)

    expect(price).toBe(2476)
  })

  it('should return 0 when given empty products', () => {
    const price = calculate([])

    expect(price).toBe(0)
  })

  it('should return 0 when not given any product', () => {
    const price = calculate()

    expect(price).toBe(0)
  })
});