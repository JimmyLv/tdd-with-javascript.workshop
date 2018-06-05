import PropTypes from 'prop-types'
import React from 'react'
import './Counter.css'

function Counter({ count, minusCount, plusCount }) {
  return <div className="actions">
    <button className="minus" onClick={minusCount}>-</button>
    <span>数量 {count} </span>
    <button className="plus" onClick={plusCount}>+</button>
  </div>
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  minusCount: PropTypes.func.isRequired,
  plusCount: PropTypes.func.isRequired,
}

export default Counter