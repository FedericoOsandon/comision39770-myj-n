import { useState, useEffect } from "react"
import ProductsList from "../PoductsList/ProductsList"

const ProductPage = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8080/api/products')
        .then(respuesta => respuesta.json())
        .then(respuesta => setProducts(respuesta.payload))
    },[])
    console.log(products)
    return (
        <ProductsList products={products} />
    )
}

export default ProductPage