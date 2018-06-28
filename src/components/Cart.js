import React, { Component } from 'react'
import {
  addProduct,
  changeProduct,
  generateProduct,
  totalPrice,
} from '../model/product'
import AddProduct from './AddProduct'
import './Cart.css'
import Header from './Header'
import Product from './Product'

class Cart extends Component {
  state = {
    products: [],
  }

  async componentDidMount() {
    const res = await fetch('http://localhost:3001/products')
    const products = await res.json()
    this.setState({ products })
  }

  handleAddProduct = id => {
    this.setState(prevState => {
      const productToExist = prevState.products.find(p => p.id === id)
      const products = productToExist
        ? changeProduct(prevState.products, {
            ...productToExist,
            count: productToExist.count + 1,
          })
        : addProduct(prevState.products, generateProduct(id))

      return { products }
    })
  }

  handleProductChange = product => {
    this.setState(prevState => ({
      products: changeProduct(prevState.products, product),
    }))
  }

  render() {
    const { products } = this.state
    return (
      <div className="page-cart">
        <Header />
        <div className="price">总价{totalPrice(products)}</div>
        <div className="list">
          {products.map(product => (
            <Product
              key={product.id}
              product={product}
              onCountChange={this.handleProductChange}
            />
          ))}
        </div>
        <div>hello world!</div>
        <AddProduct onConfirm={this.handleAddProduct} />
      </div>
    )
  }
}

Cart.propTypes = {}
Cart.defaultProps = {}

export default Cart
