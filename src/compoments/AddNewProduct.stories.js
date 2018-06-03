import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import React from 'react'
import AddNewProduct from './AddNewProduct'

storiesOf('AddNewProduct', module)
  .add('adding new product', () =>
    <AddNewProduct confirm={action('adding new product')}/>,
  )
