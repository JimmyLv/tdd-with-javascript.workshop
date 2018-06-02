import PropTypes from 'prop-types'
import React, { Component } from 'react'

class AddNewProduct extends Component {
  state = {
    shouldShowPopup: false,
    value: '',
  }

  togglePopup = () => {
    this.setState(prevState => ({
      shouldShowPopup: !prevState.shouldShowPopup,
    }))
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleConfirm = (e) => {
    if (this.state.value) {
      this.props.confirm(this.state.value)
      this.setState({
        shouldShowPopup: false,
        value: '',
      })
    }
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <button className="add" onClick={this.togglePopup}>添加商品</button>
        <div className="backdrop" onClick={this.togglePopup} />
        <form
          style={{ display: this.state.shouldShowPopup ? 'block' : 'none' }}
          onSubmit={this.handleConfirm}
        >
          <h3>添加商品</h3>
          <input type="text" placeholder='请输入商品编号' value={this.state.value} onChange={this.handleChange} />
          <button className="confirm" type="submit" value="Submit">确定</button>
        </form>
      </div>
    )
  }
}

AddNewProduct.propTypes = {
  confirm: PropTypes.func.isRequired,
}
AddNewProduct.defaultProps = {}

export default AddNewProduct
