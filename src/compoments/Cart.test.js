import { shallow } from 'enzyme'
import React from 'react'
import Cart from './Cart'
import Header from './Header'
import Popup from './Popup'
import Product from './Product'

describe('Cart components', () => {
  const products = [
    { code: '1234', name: 'AirPods', price: 1288, count: 1 },
    { code: '4321', name: 'BeatsX', price: 1188, count: 1 },
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

    expect(wrapper.find('.price').text()).toBe('总价：2476')
  })

  it('should show Popup when click adding new product', () => {
    const wrapper = shallow(<Cart />)

    wrapper.find('button').simulate('click')

    expect(wrapper.state().showShowPopup).toBeTrue()
    expect(wrapper.find(Popup)).toHaveStyle({ display: 'block'})
  })
})