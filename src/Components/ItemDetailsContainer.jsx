import React, { useState } from 'react';
import data from '../data/data';
import { useParams } from 'react-router-dom';

const ItemDetailsContainer = () => {
    const { itemId } = useParams();

    let ItemDetails = data;

    if (itemId) {
        // Convertir itemId a número para comparar con el id del producto
        const selectedItemId = parseInt(itemId);

        // Filtrar el producto con el ID correspondiente
        ItemDetails = data.filter(product => product.id === selectedItemId);
    }

    return (
        <div>
            {ItemDetails.map(product => (
                <div key={product.id}>
                    <p>ID del producto seleccionado: {product.id}</p>
                    {/* Aquí puedes mostrar otros detalles del producto */}
                </div>
            ))}
        </div>
    );
};

export default ItemDetailsContainer;
