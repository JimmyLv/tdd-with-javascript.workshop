import React, { Component } from 'react'
import { addNewProduct, generateProduct, totalPrice } from '../model/product'
import AddNewProduct from './AddNewProduct'
import Header from './Header'
import Product from './Product'

class Cart extends Component {
  state = {
    products: [],
  }

  handleAddProduct = (code) => {
    this.setState(prevState => ({
        products: addNewProduct(prevState.products, generateProduct(code)),
      }),
    )
  }

  render() {
    const { products } = this.state
    return (
      <div>
        <Header title='React Shopping Cart' />
        <div className="price">
          总价：{totalPrice(products)}
        </div>
        {products.map(product => <Product key={product.code} {...product} />)}
        <AddNewProduct confirm={this.handleAddProduct} />
      </div>
    )
  }
}

Cart.propTypes = {}
Cart.defaultProps = {}

export default Cart