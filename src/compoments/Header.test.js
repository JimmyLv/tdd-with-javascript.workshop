import { shallow } from 'enzyme'
import React from 'react'
import Header from './Header'

describe('Header component', () => {
  it('should render tittle', () => {
    const wrapper = shallow(<Header />)

    const title = wrapper.find('h3').text()

    expect(title).toBe('React Shopping Cart')
  })
})