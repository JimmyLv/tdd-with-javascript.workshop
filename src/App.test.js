import { shallow } from 'enzyme'
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
    const wrapper = shallow(<App name={'JimmyLv'}/>)

    expect(wrapper.find('.App-title')).toHaveText('Welcome JimmyLv!')
    expect(wrapper).toContainReact(<code>src/App.js</code>)
  })

  it('should change the title when trigger click', () => {
    //given
    const wrapper = shallow(<App />);
    //when
    wrapper.find('button').simulate('click');
    //then
    expect(wrapper.find('h2').text()).toEqual('2');
  });
})