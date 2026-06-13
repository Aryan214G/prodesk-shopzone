import React, { useEffect, useState } from 'react'

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

          <p key={product.id}>
              {product.title}
          </p>
        ))
      }


    </div>
  )
}

export default Shop