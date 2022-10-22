import React from 'react'
import ProductCard from './ProductCard'

function ProductsLis({data}) {
  return (
    <>
    {data?.map((item,index)=>(
       <ProductCard item={item} key={index}/>
    ))}
    </>
  )
}

export default ProductsLis