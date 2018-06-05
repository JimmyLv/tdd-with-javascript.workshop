import { shallow } from 'enzyme'
import React from 'react'
import Counter from './Counter'

describe('Count Component', function() {
  const defaultProps = {
    count: 2,
    minusCount: jest.fn(),
    plusCount: jest.fn(),
  }
  it('should invoke plusCount when click + button', () => {
    const mockPlusCount = jest.fn()
    const wrapper = shallow(
      <Counter {...defaultProps} plusCount={mockPlusCount} />,
    )

    wrapper.find('button.plus').simulate('click')
    // wrapper.find('button').at(2).simulate('click')

    expect(wrapper.find('span').text()).toBe('数量 2 ')
    expect(mockPlusCount).toBeCalled()
  })
  it('should invoke minusCount when click - button', () => {
    const mockMinusCount = jest.fn()
    const wrapper = shallow(
      <Counter {...defaultProps} minusCount={mockMinusCount} />,
    )

    wrapper.find('button.minus').simulate('click')

    expect(wrapper.find('span').text()).toBe('数量 2 ')
    expect(mockMinusCount).toBeCalled()
  })
})
