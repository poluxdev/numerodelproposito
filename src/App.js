import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap
import Uno from './components/1';
import Dos from './components/2';
import Tres from './components/3';
import Cuatro from './components/4';
import Cinco from './components/5';
import Seis from './components/6';
import Siete from './components/7';
import Ocho from './components/8';
import Nueve from './components/9';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [dia, setDia] = useState('');
  const [numeroProposito, setNumeroProposito] = useState(null);

  const manejarCambioDia = (e) => {
    setDia(e.target.value);
    const numero = reducirDia(e.target.value);
    setNumeroProposito(numero);
  };

  const reducirDia = (dia) => {
    if (!dia) return null;
    return (parseInt(dia) % 9) || 9; // Convertir el día en un número de 1 a 9
  };

  const renderSignificado = () => {
    switch (numeroProposito) {
      case 1: return <Uno />;
      case 2: return <Dos />;
      case 3: return <Tres />;
      case 4: return <Cuatro />;
      case 5: return <Cinco />;
      case 6: return <Seis />;
      case 7: return <Siete />;
      case 8: return <Ocho />;
      case 9: return <Nueve />;
      default: return <p>Introduce un día válido</p>;
    }
  };

  return (
    <div className="App container mt-4">
      <h1 className="text-center mb-4">Descubre tu Número de Propósito</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <input
            type="number"
            className="form-control mb-3"
            value={dia}
            onChange={manejarCambioDia}
            placeholder="Introduce tu día de nacimiento"
          />
        </div>
      </div>
      <motion.div
        className="significado-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: numeroProposito ? 1 : 0, scale: numeroProposito ? 1 : 0.9 }}
        transition={{ duration: 0.5 }}
      >
        {renderSignificado()}
      </motion.div>
    </div>
  );
}

export default App;
