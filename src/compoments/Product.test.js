import { shallow } from 'enzyme'
import React from 'react'
import Product from './Product'
import Counter from './Counter'

describe('Product Component', function() {
  it('should plus product when click + button', () => {
    const product = { id: 1234, price: 100, count: 1 }
    const onCountChange = jest.fn()
    const wrapper = shallow(
      <Product product={product} onCountChange={onCountChange} />,
    )

    wrapper
      .find(Counter)
      .props()
      .plusCount()

    expect(onCountChange).toBeCalledWith({
      id: 1234,
      price: 100,
      count: 2,
    })
  })

  it('should minus product when click - button', () => {
    const product = { id: 1234, price: 100, count: 2 }
    const onCountChange = jest.fn()
    const wrapper = shallow(
      <Product product={product} onCountChange={onCountChange} />,
    )

    wrapper
      .find(Counter)
      .props()
      .minusCount()

    expect(onCountChange).toBeCalledWith({
      id: 1234,
      price: 100,
      count: 1,
    })
  })

  it('should not minus product when click - button when count is 1', () => {
    const product = { id: 1234, price: 100, count: 1 }
    const onCountChange = jest.fn()
    const wrapper = shallow(
      <Product product={product} onCountChange={onCountChange} />,
    )

    wrapper
      .find(Counter)
      .props()
      .minusCount()

    expect(onCountChange).not.toBeCalled()
  })
})
