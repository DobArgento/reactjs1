import React from 'react';
import Navbar from './src/assets/Components/Navbar/Navbar';
import ItemListContainer from './src/assets/Components/itemlistcontainer/ItemListContainer';

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer mensajeBienvenida="¡Bienvenido a nuestra tienda en línea!" />
    </div>
  );
}

export default App;
