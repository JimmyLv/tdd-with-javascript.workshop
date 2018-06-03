import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './Product.css'

class Product extends Component {
  render() {
    const { id, count, price } = this.props.product
    return (
      <div className="product">
        <h3 className="code"><a href={`/products/${id}`}>商品编号：{id}</a></h3>
        <div className="code">单价：{price}</div>
        <div className="actions">
          <button className="minus" onClick={this.minusCount}>-</button>
          <span>数量 {count} </span>
          <button className="plus" onClick={this.plusCount}>+</button>
        </div>
      </div>
    )
  }

  minusCount = () => {
    const { product, onCountChange } = this.props
    if (product.count > 1) {
      onCountChange({
        ...product,
        count: product.count - 1,
      })
    }
  }

  plusCount = () => {
    const { product, onCountChange } = this.props
    onCountChange({
      ...product,
      count: product.count + 1,
    })
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  onCountChange: PropTypes.func.isRequired,
}
Product.defaultProps = {}

export default Product
