import React from 'react';

const Product = ({ product }) => {
  return (
    <div className='product-card '>
      <img src={product.image} alt={product.name} />
      <div className='product-details'>
        <h3>{product.name}</h3>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <button>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default Product;
