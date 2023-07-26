import ProductCard from "../ProductCard/ProductCard"

const ProductsList = ({products}) => {
  return (
    products.map(product => <ProductCard product={product} /> )
  )
}

export default ProductsList