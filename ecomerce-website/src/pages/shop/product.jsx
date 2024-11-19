import React, {useContext} from 'react'  
import './shop.css'
import ShopContext from '../../context/shop-context'

const Product = (props) => {
    const {id,productsName,price,productImage}=props.data
    const {addToCart}=useContext (ShopContext)
    return (
      <div className='product'>
        <img src={productImage}/>
        <div>
          <p>{productsName}</p>
          <p>{price}</p>
        </div>
        <button className='addToCartBttn' onClick={()=>{addToCart(id)}}>Add to cart</button>
      </div>
  )
}

export default Product