import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import React from 'react'
import AddNewProduct from './AddNewProduct'

storiesOf('AddNewProduct', module)
  .add('with count', () =>
    <AddNewProduct confirm={action('adding new product')}/>,
  )
