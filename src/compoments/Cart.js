import React, { Component } from 'react'
import { addProduct, generateProduct, totalPrice, changeProduct } from '../model/product'
import AddProduct from './AddProduct'
import './Cart.css'
import Header from './Header'
import Product from './Product'

class Cart extends Component {
  state = {
    products: [],
  }

  handleAddProduct = (code) => {
    this.setState(prevState => ({
        products: addProduct(prevState.products, generateProduct(code)),
      }),
    )
  }

  handleCountChange = (index, product) => {
    this.setState(prevState => ({
      products: changeProduct(prevState.products, product)
    }))
  }

  render() {
    const { products } = this.state
    return (
      <div className="page-cart">
        <Header title='React Shopping Cart' />
        <div className="price">
          总价：{totalPrice(products)}
        </div>
        <div className="list">
          {products.map(product =>
            <Product
              key={product.code}
              product={product}
              onChangeCount={this.handleCountChange}
            />)}
        </div>
        <AddProduct confirm={this.handleAddProduct} />
      </div>
    )
  }
}

Cart.propTypes = {}
Cart.defaultProps = {}

export default Cart