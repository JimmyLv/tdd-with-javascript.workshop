import { shallow } from 'enzyme'
import each from 'jest-each'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

describe('App Component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should shallow renders without crashing', () => {
    const wrapper = shallow(<App name={'JimmyLv'} />)

    expect(wrapper.find('.App-title')).toHaveText('Welcome JimmyLv!')
    expect(wrapper).toContainReact(<code>src/App.js</code>)
  })

  it('should change the title when trigger click', () => {
    //given
    const wrapper = shallow(<App />)
    //when
    wrapper.find('button').simulate('click')
    //then
    expect(wrapper.find('h2').text()).toEqual('2')
  })
  it('should extend Array is fine', () => {
    expect([]).toBeArray()
    expect([]).toBeEmpty()
    expect([1, 2]).toBeArray()
  })
})

describe('just use jest-each to testing multiple cases', () => {
  each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
  ${2} | ${2} | ${4}
`.it('returns $expected when adding $a to $b', ({ a, b, expected }) => {
    expect(a + b).toBe(expected)
  })

})
