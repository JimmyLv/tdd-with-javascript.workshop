import { shallow } from 'enzyme'
import React from 'react'
import Product from './Product'

describe('Product Component', function () {
  it('should plus product when click + button', () => {
    const product = { code: '1234', price: 100, count: 1 }
    const onChangeCount = jest.fn()
    const wrapper = shallow(<Product product={product} onChangeCount={onChangeCount} />)

    wrapper.find('button.plus').simulate('click')

    expect(onChangeCount).toBeCalledWith({
      code: '1234',
      price: 100,
      count: 2
    })
  })

  it('should minus product when click - button', () => {
    const product = { code: '1234', price: 100, count: 2 }
    const onChangeCount = jest.fn()
    const wrapper = shallow(<Product product={product} onChangeCount={onChangeCount} />)

    wrapper.find('button.minus').simulate('click')

    expect(onChangeCount).toBeCalledWith({
      code: '1234',
      price: 100,
      count: 1
    })
  })

  it('should not minus product when click - button when count is 1', () => {
    const product = { code: '1234', price: 100, count: 1 }
    const onChangeCount = jest.fn()
    const wrapper = shallow(<Product product={product} onChangeCount={onChangeCount} />)

    wrapper.find('button.minus').simulate('click')

    expect(onChangeCount).not.toBeCalled()
  })
})