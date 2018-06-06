import { shallow } from 'enzyme'
import React from 'react'
import Cart from './Cart'
import Header from './Header'

describe('Cart components', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Cart />)
  })

  it('should contain Header component', () => {
    expect(wrapper.find(Header)).toExist()
    expect(wrapper).toContainReact(<Header />)
  })
})
