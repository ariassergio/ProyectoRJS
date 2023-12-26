import React, { useState, useEffect } from 'react';
import { data } from '../data/data';
import { useNavigate, useLocation } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';
import ProductDetails from './ProductDetails';



export const ProductList = () => {
	const { categoryId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

  	let filteredProducts = data;

	if (categoryId) {
		filteredProducts = data.filter(product => product.category === categoryId);
	}

	
	
    const [products] = useState(data);
    const [selectedProduct, setSelectedProduct] = useState(null); // Nuevo estado para el producto seleccionado
    const [previousLocation, setPreviousLocation] = useState(null);

    const showProductDetails = (product) => {
        setSelectedProduct(product); // Esto muestra la ventana modal
        setPreviousLocation(location.pathname);
        navigate(`/productos/${product.id}`);
    };

    const closeProductDetails = () => {
        setSelectedProduct(null); // Cerrar la ventana de detalles al hacer clic en algún botón de cierre o fuera de la ventana modal
        if (previousLocation) {
            navigate(previousLocation); // Volver a la ubicación anterior al cerrar el modal
        } else {
            navigate('/'); // Si no hay ubicación anterior, redirigir a la página principal
        }
    };


	

    return (
       
        <div className='container-items'>
            {filteredProducts.map((product) => (
                <div key={product.id} className='item'>
                    <figure>
                        <img src={product.image} alt={product.name} />
                    </figure>
                    <div className='info-product'>
                        <h2>{product.name}</h2>
                        <p className='price'>${product.price}</p>
                         {/* Usar Link para dirigir al detalle del producto */}
                         <Link to={`/productos/${product.id}`}>
                            <button className='infobutton' onClick={() => showProductDetails(product)}>
                                <span className='buttontext'>Info</span>
                            </button>
                        </Link>
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
