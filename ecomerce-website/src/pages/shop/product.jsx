import React from 'react'

const Product = (props) => {
    const {id,productsName,price,productImage}=props.data
  return (
    <div>{productsName}</div>
  )
}

export default Product