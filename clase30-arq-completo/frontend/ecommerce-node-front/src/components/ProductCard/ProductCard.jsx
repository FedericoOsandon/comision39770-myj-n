import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div>        
        <p>Nombre: {product.title}</p>
        <p>precio: {product.price}</p>
        <p>stock: {product.stock}</p>
        <p>categoria: {product.description}</p>
    </div>
  )
}

export default ProductCard