import React, { useState, useEffect } from 'react';
import { data } from '../data/data';
import CategoryFilter from './CategoryFilter';


export const ProductList = () =>{
	const [products, setProducts] = useState(data);
	const [filteredProducts, setFilteredProducts] = useState(data);
	const [selectedProduct, setSelectedProduct] = useState(null); // Nuevo estado para el producto seleccionado
	const categories = [...new Set(data.map((product) => product.categoria))];

	const filterProducts = (category) => {
		if (category === 'all') {
		setFilteredProducts(products);
		} else {
		const filtered = products.filter((product) => product.categoria === category);
		setFilteredProducts(filtered);
		}
	};

	const showProductDetails = (product) => {
		setSelectedProduct(product); // Establecer el producto seleccionado al hacer clic en "Info"
	};
	
	const closeProductDetails = () => {
		setSelectedProduct(null); // Cerrar la ventana de detalles al hacer clic en algún botón de cierre o fuera de la ventana modal
	};
	
	 
	useEffect(() => {
		setFilteredProducts(products);
	}, [products]);
	return (
		
		<div>
      <CategoryFilter categories={categories} filterProducts={filterProducts} />
      <div className='container-items'>
        {/* CategoryFilter y la lista completa de productos */}
        {filteredProducts.map((product) => (
          <div key={product.id} className='item'>
            <figure>
              <img src={product.image} alt={product.name} />
            </figure>
            <div className='info-product'>
              <h2>{product.name}</h2>
              <p className='price'>${product.price}</p>
			  <button className='infobutton' onClick={() => showProductDetails(product)}>
			  <span className='buttontext'>Info</span>
              </button>
              <button className='buttoncarrito'>
			  <span >Agregar al carrito</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    
		{/* Ventana modal o componente para mostrar detalles del producto */}
		{selectedProduct && (
			<div className='modal'>
			<div className='modal-content'>
				<span className='close' onClick={closeProductDetails}>
				&times;
				</span>
				<h2>{selectedProduct.name}</h2>
				<p>{/* Mostrar otros detalles del producto aquí */}</p>
				<img src={selectedProduct.image} alt={selectedProduct.name} />
				<p>Price: ${selectedProduct.price}</p>
			</div>
			</div>
		)}
    </div>
	);
};