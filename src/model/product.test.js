import { products } from '../fixtures/fakeData'
import { addProduct, changeProduct, totalPrice } from './product'

describe('product functions', () => {
  it('should return total price when given products', () => {
    const price = totalPrice(products)

    expect(price).toBe(300)
  })

  it('should return 0 when given empty products', () => {
    const price = totalPrice([])

    expect(price).toBe(0)
  })

  it('should return 0 when not given any product', () => {
    const price = totalPrice()

    expect(price).toBe(0)
  })

  it('should add new product into products', () => {
    const productToAdd = { id: 4321, price: 200, count: 1 }
    const products = [{ id: 1234, price: 100, count: 1 }]

    const expectedProducts = addProduct(products, productToAdd)

    expect(expectedProducts).toEqual([
      { id: 1234, price: 100, count: 1 },
      { id: 4321, price: 200, count: 1 },
    ])
  })

  it('should change the product in products', () => {
    const productToChange = { id: 4321, price: 200, count: 4 }
    const products = [{ id: 4321, price: 200, count: 1 }]

    const expectedProducts = changeProduct(products, productToChange)

    expect(expectedProducts).toEqual([{ id: 4321, price: 200, count: 4 }])
  })
})
