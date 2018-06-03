import { storiesOf } from '@storybook/react'
import React from 'react'
import Header from './Header'

storiesOf('Header', module)
  .add('with title', () =>
    <Header />,
  )
