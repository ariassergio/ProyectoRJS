import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);

  // Aquí, obtiene los detalles del producto de la API
  async function getProduct() {
    const response = await fetch(`/productos/${productId}`);
    const data = await response.json();
    setProduct(data);
  }

  useEffect(() => {
    getProduct();
  }, [productId]);

  return (
    <div>
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>{product.details}</p>
          <img src={product.image} alt={product.name} />
          <p>Price: ${product.price}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;