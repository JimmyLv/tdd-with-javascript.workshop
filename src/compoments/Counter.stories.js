import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import React from 'react'
import Counter from './Counter'

storiesOf('Counter', module)
  .add('with count', () =>
    <Counter
      count={10}
      minusCount={action('minus count')}
      plusCount={action('plus count')}
    />,
  )
