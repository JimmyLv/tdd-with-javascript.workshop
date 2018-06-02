import { shallow, mount } from 'enzyme'
import React from 'react'
import { addNewProduct, generateProduct } from '../model/product'
import Cart from './Cart'
import Header from './Header'
import Product from './Product'

jest.mock('../model/product', () => ({
  totalPrice: jest.fn(() => 300),
  addNewProduct: jest.fn(),
  generateProduct: jest.fn(),
}))

describe('Cart components', () => {
  const products = [
    { code: '1234', price: 100, count: 1 },
    { code: '4321', price: 200, count: 1 },
  ]

  it('should contain Header component', () => {
    const wrapper = shallow(<Cart />)

    expect(wrapper.find(Header)).toExist()
    expect(wrapper.find(Header).props().title).toBe('React Shopping Cart')
  })

  it('should render Product list when have multiple products', () => {
    const wrapper = shallow(<Cart />)
    wrapper.setState({ products })

    expect(wrapper.find(Product)).toHaveLength(2)
  })

  it('should display total price when products added', () => {
    const wrapper = shallow(<Cart />)
    wrapper.setState({ products })

    expect(wrapper.find('.price').text()).toBe('总价：300')
  })

  it('should increase product count when adding same product', () => {

    const wrapper = shallow(<Cart />)
    wrapper.setState({ products })

    wrapper.instance().handleAddProduct('1234')
    expect(addNewProduct).toHaveBeenCalledTimes(1)
    expect(generateProduct).toHaveBeenCalledTimes(1)
  })

})