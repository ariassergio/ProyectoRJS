import React from 'react';

function ItemListContainer (props){

  return (
    <div className='proddisp'>
      <p>{props.productos}</p>
    </div>
  );
};

export default ItemListContainer;
