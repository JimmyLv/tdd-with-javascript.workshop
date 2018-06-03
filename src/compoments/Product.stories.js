import { storiesOf } from '@storybook/react'
import React from 'react'
import Product from './Product'
import { action } from '@storybook/addon-actions';

const product = { id: 1234, price: 100, count: 1 }

storiesOf('Product', module)
  .add('with count', () =>
    <Product product={product} onCountChange={action('change product count')}/>,
  )
