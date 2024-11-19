import React from 'react'  
import './shop.css'

const Product = (props) => {
    const {id,productsName,price,productImage}=props.data
  return (
    <div className='product'>
      <img src={productImage}/>
      <div>
        <p>{productsName}</p>
        <p>{price}</p>
      </div>
      <button className='addToCartBttn'>Add to cart</button>
    </div>
  )
}

export default Product