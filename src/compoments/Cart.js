import React, { Component } from 'react'
import { totalPrice } from '../model/product'
import Header from './Header'
import Popup from './Popup'
import Product from './Product'

class Cart extends Component {
  state = {
    products: [],
    showShowPopup: false,
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
        <button onClick={this.togglePopup}>添加商品
        </button>
        <Popup style={{ display: 'block' }} />
      </div>
    )
  }

  togglePopup = () => {
    this.setState({
      showShowPopup: true,
    })
  }
}

Cart.propTypes = {}
Cart.defaultProps = {}

export default Cart