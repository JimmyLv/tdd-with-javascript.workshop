import { mount, shallow } from 'enzyme'
import React from 'react'
import { addProduct, changeProduct, generateProduct, totalPrice } from '../model/product'
import Cart from './Cart'
import Header from './Header'
import Product from './Product'

// import * as products from '../model/product'
// jest.spyOn(products, 'addProduct')

jest.mock('../model/product', () => ({
  totalPrice: jest.fn(() => 300),
  addProduct: jest.fn(() => []),
  generateProduct: jest.fn(() => {}),
  changeProduct: jest.fn(() => []),
}))

describe('Cart components', () => {
  afterEach(() => {
    totalPrice.mockClear()
    addProduct.mockClear()
    generateProduct.mockClear()
    changeProduct.mockClear()
  })
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

  it('should invoke handleAddProduct when click the confirm button', () => {
    const wrapper = mount(<Cart />)
    const spy = jest.spyOn(wrapper.instance(), 'handleAddProduct')
    wrapper.instance().forceUpdate()

    expect(spy).toHaveBeenCalledTimes(0)

    wrapper.find('input').simulate('change', { target: { value: '1234' } })
    wrapper.find('form').simulate('submit')

    expect(spy).toHaveBeenCalledTimes(1)
  })

  it('should increase products from state when adding new product', () => {
    const wrapper = shallow(<Cart />)
    wrapper.setState({ products })

    wrapper.instance().handleAddProduct('9999')
    expect(addProduct).toHaveBeenCalledTimes(1)
    expect(generateProduct).toHaveBeenCalledTimes(1)
  })

  it('should change products from state when adding exiting product', () => {
    const wrapper = shallow(<Cart />)
    wrapper.setState({ products })

    wrapper.instance().handleAddProduct('1234')
    expect(changeProduct).toHaveBeenCalledTimes(1)
  })
})