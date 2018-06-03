import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import fetchMock from 'fetch-mock'
import 'jest-enzyme'
import 'jest-extended'

const products = [
  { id: 1234, price: 100, count: 1 },
  { id: 4321, price: 200, count: 1 },
]

fetchMock.get('http://localhost:3001/products', products, { overwriteRoutes: false })

configure({ adapter: new Adapter() })
