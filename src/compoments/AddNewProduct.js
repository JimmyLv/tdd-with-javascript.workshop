import React, { Component } from 'react'

class AddNewProduct extends Component {
  state = {
    showShowPopup: false,
  }

  togglePopup = () => {
    this.setState({
      showShowPopup: true,
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.togglePopup}>添加商品
        </button>
        <AddNewProduct style={{ display: 'block' }} />
        <div className="backdrop" onClick={this.togglePopup}/>
        <form>
          <h3>添加商品</h3>
          <input type="text" placeholder='请输入商品编号' />
          <button onClick={() => {}}>确定</button>
        </form>
      </div>
    )
  }
}

AddNewProduct.propTypes = {}
AddNewProduct.defaultProps = {}

export default AddNewProduct
