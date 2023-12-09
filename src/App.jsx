import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer'
import CartWidget from './Components/CartWidget';
import Swal from 'sweetalert2';



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
      <Navbar />
      <ItemListContainer productos={productosMessage}/>
    </div>
  );
}

export default App;
