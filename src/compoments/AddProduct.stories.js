import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import React from 'react'
import AddProduct from './AddProduct'

storiesOf('AddProduct', module).add('adding new product', () => (
  <AddProduct onConfirm={action('adding new product')} />
))
