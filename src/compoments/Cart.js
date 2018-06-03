import React, { Component } from 'react'
import { addProduct, changeProduct, generateProduct, totalPrice } from '../model/product'
import AddProduct from './AddProduct'
import './Cart.css'
import Header from './Header'
import Product from './Product'

class Cart extends Component {
  state = {
    products: [],
  }

  componentDidMount() {
    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then(products => this.setState({ products }))
  }

  handleAddProduct = (id) => {
    this.setState(prevState => {
        const productToExist = prevState.products.find(p => p.id === id)
        const products = productToExist
          ? changeProduct(prevState.products, { ...productToExist, count: productToExist.count + 1 })
          : addProduct(prevState.products, generateProduct(id))

        return { products }
      },
    )
  }

  handleProductChange = (product) => {
    this.setState(prevState => ({
      products: changeProduct(prevState.products, product),
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
              key={product.id}
              product={product}
              onCountChange={this.handleProductChange}
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