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
import Diez from './components/10'; // Importar el nuevo componente
import Once from './components/11';
import Doce from './components/12';
import Trece from './components/13';
import Catorce from './components/14';
import Quince from './components/15';
import Dieciseis from './components/16';
import Diecisiete from './components/17';
import Dieciocho from './components/18';
import Diecinueve from './components/19';
import Veinte from './components/20';
import Veintiuno from './components/21';
import Veintidos from './components/22';
import Veintitres from './components/23';
import Veinticuatro from './components/24';
import Veinticinco from './components/25';
import Veintiseis from './components/26';
import Veintisiete from './components/27';
import Veintiocho from './components/28';
import Veintinueve from './components/29';
import Treinta from './components/30';
import TreintaUno from './components/31';
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
    return parseInt(dia); // Convertir el día en un número del 1 al 31
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
      case 10: return <Diez />;
      case 11: return <Once />;
      case 12: return <Doce />;
      case 13: return <Trece />;
      case 14: return <Catorce />;
      case 15: return <Quince />;
      case 16: return <Dieciseis />;
      case 17: return <Diecisiete />;
      case 18: return <Dieciocho />;
      case 19: return <Diecinueve />;
      case 20: return <Veinte />;
      case 21: return <Veintiuno />;
      case 22: return <Veintidos />;
      case 23: return <Veintitres />;
      case 24: return <Veinticuatro />;
      case 25: return <Veinticinco />;
      case 26: return <Veintiseis />;
      case 27: return <Veintisiete />;
      case 28: return <Veintiocho />;
      case 29: return <Veintinueve />;
      case 30: return <Treinta />;
      case 31: return <TreintaUno />;
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
            min="1"
            max="31"
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
