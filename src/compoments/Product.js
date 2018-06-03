import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './Product.css'
class Product extends Component {
  render() {
    const { code, count } = this.props
    return (
      <div className="product">
        <h3 className="code"><a href={`/products/${code}`}>商品编号：{code}</a></h3>
        <div className="actions">
          <button>-</button>
          <span>数量 {count}</span>
          <button>+</button>
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
