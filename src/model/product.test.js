import { totalPrice } from './product'

describe('product functions', () => {
  const products = [
    { code: '1234', name: 'AirPods', price: 1288, count: 1 },
    { code: '4321', name: 'BeatsX', price: 1188, count: 1 },
  ]

  it('should return total price when given products', () => {
    const price = totalPrice(products)

    expect(price).toBe(2476)
  })

  it('should return 0 when given empty products', () => {
    const price = totalPrice([])

    expect(price).toBe(0)
  })

  it('should return 0 when not given any product', () => {
    const price = totalPrice()

    expect(price).toBe(0)
  })
});