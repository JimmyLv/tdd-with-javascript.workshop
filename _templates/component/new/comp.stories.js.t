---
to: src/components/<%= name %>.story.js
---
<% const comp = h.inflection.undasherize(name) -%>
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import <%= comp %> from './<%= name %>'

storiesOf('<%= comp %>', module)
  .add('default', () => <<%= comp %> />)