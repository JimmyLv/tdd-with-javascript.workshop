import React, { Component } from 'react'
import { totalPrice } from '../model/product'
import Header from './Header'
import Product from './Product'

class Cart extends Component {
  state = {
    products: [],
  }

  render() {
    const { products } = this.state
    return (
      <div>
        <Header title='React Shopping Cart' />
        <div className="price">
          总价：{totalPrice(products)}
        </div>
        {products.map(p => <Product key={p.code} />)}
      </div>
    )
  }
}

Cart.propTypes = {}
Cart.defaultProps = {}

export default Cart