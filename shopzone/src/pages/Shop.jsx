import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const Shop = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    fetchProducts();
  }, []);

  async function fetchProducts() {
    
    const response = await fetch("https://dummyjson.com/products");

    const data = await response.json();

    console.log(data);

    setProducts(data.products);
  }

  return (
    <div>
      <h1>Shop</h1>

      {
        products.map(product => (

          <Link
           key={product.id}
           to = {`/product/${product.id}`}
           >
            
            <div
            className='product-card'
            >

              <img
              src = {product.thumbnail}
              alt = {product.title}
              width="150"
              />

              <h3>{product.title}</h3>

              <p> ${product.price} </p>

              </div>
              
          </Link>
        ))
      }


    </div>
  )
}

export default Shop