import React from 'react';
import './App.css';
import Personas from './components/Personas';
import Empresas from './components/Empresas';
import Marcas from './components/Marcas';
import Vehiculos from './components/Vehiculos';

function App() {
  return (
    <div className="App">
      <Personas />
      <Empresas />
      <Marcas />
      <Vehiculos />
    </div>
  );
}

export default App;

