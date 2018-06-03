import { mount, shallow } from 'enzyme'
import React from 'react'
import AddProduct from './AddProduct'

describe('AddProduct', () => {
  it('should show AddProduct when click add button', () => {
    const wrapper = shallow(<AddProduct confirm={jest.fn()} />)

    wrapper.find('.add').simulate('click')

    expect(wrapper.state().shouldShowPopup).toBeTrue()
    expect(wrapper.find('.popup')).toHaveStyle({ display: 'block' })
  })

  it('should toggle popup and handle new product when adding new product', () => {
    const mockedConfirm = jest.fn()
    const wrapper = mount(<AddProduct confirm={mockedConfirm} />)

    wrapper.find('input').simulate('change', { target: { value: '1234' } })
    wrapper.find('form').simulate('submit')

    expect(wrapper.state().shouldShowPopup).toBeFalse()
    expect(wrapper.state().value).toBeEmpty()
    expect(wrapper.find('.popup')).toHaveStyle({ display: 'none' })
    expect(mockedConfirm).toHaveBeenCalledTimes(1)
  })

  it('should no reaction if adding empty product code', () => {
    const wrapper = shallow(<AddProduct confirm={jest.fn()} />)
    wrapper.setState({ shouldShowPopup: true })

    wrapper.find('form').simulate('submit', {
      preventDefault: jest.fn(),
      target: { value: '' },
    })

    expect(wrapper.state().shouldShowPopup).toBeTrue()
    expect(wrapper.find('.popup')).toHaveStyle({ display: 'block' })
  })

  it('should hidden popup when click backdrop', () => {
    const wrapper = shallow(<AddProduct confirm={jest.fn()} />)
    wrapper.setState({ shouldShowPopup: true })

    wrapper.find('.backdrop').simulate('click')

    expect(wrapper.state().shouldShowPopup).toBeFalse()
  })
})