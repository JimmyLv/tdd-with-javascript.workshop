import { storiesOf } from '@storybook/react'
import React from 'react'
import Product from './Product'
import { action } from '@storybook/addon-actions';

const product = { code: '1234', price: 100, count: 1 }

storiesOf('Product', module)
  .add('with count', () =>
    <Product product={product} onChangeCount={action('change product count')}/>,
  )
