import React, { useState, useEffect } from 'react';
import { data } from '../data/data';
import { useParams} from 'react-router-dom';



export const ProductList = () => {

	const { categoryId } = useParams();

  	let filteredProducts = data;

	if (categoryId) {
		filteredProducts = data.filter(product => product.category === categoryId);
	}

	
	
    const [products] = useState(data);
    const [selectedProduct, setSelectedProduct] = useState(null); // Nuevo estado para el producto seleccionado

    const showProductDetails = (product) => {
        setSelectedProduct(product); // Establecer el producto seleccionado al hacer clic en "Info"
    };

    const closeProductDetails = () => {
        setSelectedProduct(null); // Cerrar la ventana de detalles al hacer clic en algún botón de cierre o fuera de la ventana modal
    };


	/*
    useEffect(() => {
        // Aquí puedes realizar cualquier lógica adicional cuando los productos cambien
        // Por ejemplo, si necesitas cargar los productos desde una fuente externa
        // Simplemente actualiza los productos usando setProducts(newData)
    }, []);
	*/


    return (
        <div className='container-items'>
            {/* Lista completa de productos */}
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
        
            {/* Ventana modal o componente para mostrar detalles del producto */}
            {selectedProduct && (
                <div className='modal-overlay'>
					<div className='modal'>
                    <div className='modal-content'>
                        <span className='close' onClick={closeProductDetails}>
                            &times;
                        </span>
                        <h2>{selectedProduct.name}</h2>
                        <p>{selectedProduct.details}</p>
                        <img src={selectedProduct.image} alt={selectedProduct.name} className='modal-img' />
                        <p>Price: ${selectedProduct.price}</p>
                    </div>
					</div>
                </div>
            )}
        </div>
    );
};
