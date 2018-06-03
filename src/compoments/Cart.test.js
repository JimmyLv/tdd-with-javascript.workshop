import { shallow } from 'enzyme'
import React from 'react'
import { products } from '../fixtures/fakeData'
import AddProduct from './AddProduct'
import Cart from './Cart'
import Header from './Header'
import Product from './Product'

// import * as products from '../model/product'
// jest.spyOn(products, 'addProduct')
//
// jest.mock('../model/product', () => ({
//   totalPrice: jest.fn(() => 300),
//   addProduct: jest.fn(() => []),
//   generateProduct: jest.fn(() => {}),
//   changeProduct: jest.fn(() => []),
// }))

describe('Cart components', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Cart />)
  })
  // afterEach(() => {
  //   totalPrice.mockClear()
  //   addProduct.mockClear()
  //   generateProduct.mockClear()
  //   changeProduct.mockClear()
  // })

  it('should contain Header component', () => {
    expect(wrapper.find(Header)).toExist()
    expect(wrapper).toContainReact(<Header />)
  })

  it('should render Product list when have multiple products', () => {
    wrapper.setState({ products: [...products, ...products] })

    expect(wrapper.find(Product)).toHaveLength(4)
  })

  it('should display total price when products added', () => {
    wrapper.setState({ products })

    expect(wrapper.find('.price').text()).toBe('总价：300')
  })

  it('should increase products from state when adding new product', () => {
    const wrapper = shallow(<Cart />)
    wrapper.setState({ products })

    wrapper.find(AddProduct).props().onConfirm(9999)

    expect(wrapper.state().products).toEqual([
      { id: 1234, price: 100, count: 1 },
      { id: 4321, price: 200, count: 1 },
      { id: 9999, price: 100, count: 1 },
    ])
  })

  it('should change products from state when adding exiting product', () => {
    const wrapper = shallow(<Cart />)
    wrapper.setState({ products })

    wrapper.find(AddProduct).props().onConfirm(1234)

    expect(wrapper.state().products).toEqual([
      { id: 1234, price: 100, count: 2 },
      { id: 4321, price: 200, count: 1 },
    ])
  })

  it('should fetch products from server then set into state', async () => {
    await wrapper.instance().componentDidMount()

    expect(wrapper.state().products).toEqual(products)
  })

  // it('should call fetch API from server when component render', async () => {
  //   const spyOnFetch = fetch.mockResponseOnce(products)
  //   shallow(<Cart />)
  //
  //   expect(spyOnFetch).toBeCalled()
  // })
})