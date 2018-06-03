import { storiesOf } from '@storybook/react'
import React from 'react'
import Product from './Product'

storiesOf('Product', module)
  .add('with count', () =>
    <Product code="1234" count={1}/>,
  )
