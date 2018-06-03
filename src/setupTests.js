import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import fetchMock from 'fetch-mock'
import 'jest-enzyme'
import 'jest-extended'
import { products } from './fixtures/fakeData'

fetchMock.get('http://localhost:3001/products', products, { overwriteRoutes: false })

configure({ adapter: new Adapter() })
