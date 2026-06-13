import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

const Product = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {

    fetchProduct();

}, [id]);

async function fetchProduct() {

    const response =
        await fetch(
            `https://dummyjson.com/products/${id}`
        );

    const data =
        await response.json();

    setProduct(data);
}

if (!product) {

    return <h1>Loading...</h1>;
}

  return (

    <div className="product-details">

        <img
            src={product.thumbnail}
            alt={product.title}
        />

        <h1>
            {product.title}
        </h1>

        <p className="product-price">
            ${product.price}
        </p>

        <p>
            {product.description}
        </p>

    </div>
);
}

export default Product