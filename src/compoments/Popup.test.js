import { shallow } from 'enzyme'
import AddNewProduct from './AddNewProduct'

it('should show AddNewProduct when click adding new product', () => {
  const wrapper = shallow(<Cart />)

  wrapper.find('button').simulate('click')

  expect(wrapper.state().showShowPopup).toBeTrue()
  expect(wrapper.find(AddNewProduct)).toHaveStyle({ display: 'block'})
})