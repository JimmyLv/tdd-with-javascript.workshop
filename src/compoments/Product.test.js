import { shallow } from 'enzyme'
import React from 'react'
import Product from './Product'

describe('Product Component', function () {
  it('should plus product when click + button', () => {
    const product = { id: 1234, price: 100, count: 1 }
    const onCountChange = jest.fn()
    const wrapper = shallow(<Product product={product} onCountChange={onCountChange} />)

    wrapper.find('button.plus').simulate('click')
    // wrapper.find('button').at(2).simulate('click')

    expect(onCountChange).toBeCalledWith({
      id: 1234,
      price: 100,
      count: 2
    })
  })

  it('should minus product when click - button', () => {
    const product = { id: 1234, price: 100, count: 2 }
    const onCountChange = jest.fn()
    const wrapper = shallow(<Product product={product} onCountChange={onCountChange} />)

    wrapper.find('button.minus').simulate('click')

    expect(onCountChange).toBeCalledWith({
      id: 1234,
      price: 100,
      count: 1
    })
  })

  it('should not minus product when click - button when count is 1', () => {
    const product = { id: 1234, price: 100, count: 1 }
    const onCountChange = jest.fn()
    const wrapper = shallow(<Product product={product} onCountChange={onCountChange} />)

    wrapper.find('button.minus').simulate('click')

    expect(onCountChange).not.toBeCalled()
  })
})