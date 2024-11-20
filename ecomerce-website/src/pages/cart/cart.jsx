import React from 'react'  
import PRODUCTS from '../../products'
import ShopContext from '../../context/shop-context'

const Cart = () => {
  return (
    <div className='cart'>
      <div>
        <h1>your cart item</h1>
      </div>
      <div className='cartItems'>
        {}
      </div>
    </div>
  )
}

export default Cart