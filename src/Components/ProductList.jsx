import React from 'react';
import { data } from '../data/data';

export const ProductList = () =>{
	return (
		<div className='container-items'>
			{data.map(product => (
				<div className='item'>
					<figure>
						<img src={product.image} alt={product.name} />
					</figure>
					<div className='info-product'>
						<h2>{product.name}</h2>
						<p className='price'>${product.price}</p>
						<button >
							Añadir al carrito
						</button>
					</div>
				</div>
			))}
		</div>
	);
};