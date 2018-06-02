import { mount, shallow } from 'enzyme'
import React from 'react'
import AddNewProduct from './AddNewProduct'

describe('AddNewProduct', () => {
  it('should show AddNewProduct when click add button', () => {
    const wrapper = shallow(<AddNewProduct confirm={jest.fn()} />)

    wrapper.find('.add').simulate('click')

    expect(wrapper.state().shouldShowPopup).toBeTrue()
    expect(wrapper.find('form')).toHaveStyle({ display: 'block' })
  })

  it('should toggle popup and handle new product when adding new product', () => {
    const mockedConfirm = jest.fn()
    const wrapper = mount(<AddNewProduct confirm={mockedConfirm} />)

    wrapper.find('form').simulate('submit', { target: { value: '1234' } })

    expect(wrapper.state().shouldShowPopup).toBeFalse()
    expect(wrapper.state().value).toBeEmpty()
    expect(wrapper.find('form')).toHaveStyle({ display: 'none' })
    expect(mockedConfirm).toHaveBeenCalledTimes(1)
  })

  it('should no reaction if adding empty product code', () => {
    const wrapper = shallow(<AddNewProduct confirm={jest.fn()} />)
    wrapper.setState({ shouldShowPopup: true })

    wrapper.find('form').simulate('submit', {
      preventDefault: jest.fn(),
      target: { value: ''},
    })

    expect(wrapper.state().shouldShowPopup).toBeTrue()
    expect(wrapper.find('form')).toHaveStyle({ display: 'block' })
  })

  it('should hidden popup when click backdrop', () => {
    const wrapper = shallow(<AddNewProduct confirm={jest.fn()} />)
    wrapper.setState({ shouldShowPopup: true })

    wrapper.find('.backdrop').simulate('click')

    expect(wrapper.state().shouldShowPopup).toBeFalse()
  })
})