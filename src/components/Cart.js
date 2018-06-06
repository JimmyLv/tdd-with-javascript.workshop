import React, { Component } from 'react'
import './Cart.css'
import Header from './Header'

class Cart extends Component {
  state = {
    products: [],
  }

  render() {
    return (
      <div className="page-cart">
        <Header />
        <div className="price">总价：0</div>
        <div className="list">

        </div>
      </div>
    )
  }
}

Cart.propTypes = {}
Cart.defaultProps = {}

export default Cart
