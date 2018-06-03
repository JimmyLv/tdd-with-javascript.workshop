import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import React from 'react'
import AddProduct from './AddProduct'

storiesOf('AddProduct', module)
  .add('adding new product', () =>
    <AddProduct confirm={action('adding new product')}/>,
  )
