import { mount, shallow } from 'enzyme'
import React from 'react'
import AddProduct from './AddProduct'

describe('AddProduct', () => {
  it('should show AddProduct when click add button', () => {
    const wrapper = shallow(<AddProduct onConfirm={jest.fn()} />)

    wrapper.find('.add').simulate('click')

    expect(wrapper.state().shouldShowPopup).toBeTrue()
    expect(wrapper.find('.popup')).toHaveStyle({ display: 'block' })
  })

  it('should toggle popup and handle product when adding new product', () => {
    const mockedConfirm = jest.fn()
    const wrapper = mount(<AddProduct onConfirm={mockedConfirm} />)

    wrapper.find('input').simulate('change', { target: { value: 1234 } })
    wrapper.find('form').simulate('submit')

    expect(wrapper.state().shouldShowPopup).toBeFalse()
    expect(wrapper.state().value).toBeEmpty()
    expect(wrapper.find('.popup')).toHaveStyle({ display: 'none' })
    expect(mockedConfirm).toBeCalledWith(1234)
  })

  it('should no reaction if adding empty product id', () => {
    const wrapper = shallow(<AddProduct onConfirm={jest.fn()} />)
    wrapper.setState({ shouldShowPopup: true })

    wrapper.find('form').simulate('submit', {
      preventDefault: jest.fn(),
      target: { value: '' },
    })

    expect(wrapper.state().shouldShowPopup).toBeTrue()
    expect(wrapper.find('.popup')).toHaveStyle({ display: 'block' })
  })

  it('should hidden popup when click backdrop', () => {
    const wrapper = shallow(<AddProduct onConfirm={jest.fn()} />)
    wrapper.setState({ shouldShowPopup: true })

    wrapper.find('.backdrop').simulate('click')

    expect(wrapper.state().shouldShowPopup).toBeFalse()
  })
})