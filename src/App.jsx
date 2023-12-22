import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer'
import CartWidget from './Components/CartWidget';
import Swal from 'sweetalert2';
import { ProductList } from './Components/ProductList';
import ItemDetailsContainer from './Components/ItemDetailsContainer';


function App() {
  const greetingMessage = "Bienvenido a la tienda del campeón del mundo! ⭐⭐⭐";
  const productosMessage = "Productos disponibles"
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    if (showAlert) {
      Swal.fire({
        text: greetingMessage,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
      setShowAlert(false); // Para mostrar la alerta solo una vez
    }
  }, [showAlert, greetingMessage]);

  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<>
              <ItemListContainer productos={productosMessage} />
              <ProductList />
              </>}
          />
          <Route path="/productos/:categoryId" element={<ProductList/>} />
          <Route path='/item/item:Id' element={ItemDetailsContainer}/>

          <Route path='/not-found' element={<h2>Not found</h2>} />
          <Route path='*' element={<Navigate to={"/not-found"}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
