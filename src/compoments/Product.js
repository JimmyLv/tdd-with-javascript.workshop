import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Product extends Component {
  render() {
    const { code, count } = this.props
    return (
      <div>
        <h3><a href={`/products/${code}`}>商品编号：{code}</a></h3>
        <div>
          <button>-1</button>
          <span>{count}</span>
          <button>+1</button>
        </div>
      </div>
    )
  }
}

Product.propTypes = {
  code: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
}
Product.defaultProps = {}

export default Product
