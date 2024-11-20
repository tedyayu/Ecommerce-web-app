import React, {useContext} from 'react'  
import './shop.css'
import {ShopContext} from '../../context/shop-context'

const Product = (props) => {
    const {id,productsName,price,productImage}=props.data
    const {addToCart,cartItem}=useContext (ShopContext)
    const cartItemAmount=cartItem[id]
    return (
      <div className='product'>
        <img src={productImage} alt='product-image'/>
        <div>
          <p>{productsName}</p>
          <p>{price}</p>
        </div>
        <button className='addToCartBttn' onClick={()=>{addToCart(id)}}>Add to cart{cartItemAmount>0 && `(${cartItemAmount})`}</button>
      </div>
  )
}

export default Product