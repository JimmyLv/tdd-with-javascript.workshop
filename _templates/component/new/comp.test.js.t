---
to: src/components/<%= name %>.test.js
---
<% const comp = h.inflection.undasherize(name) %>import React from 'react'
import { shallow } from 'enzyme'
import <%= comp %> from './<%= name %>'

it('<%= comp %> component', () => {
  const wrapper = shallow(<<%= comp %> />)

  expect(wrapper.find()).toBe()
})
