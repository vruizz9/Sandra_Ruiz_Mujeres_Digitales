import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Temperatura from './Components/temperatura';
import EstadoAgua from './Components/estadoAgua';

const App = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const celsiusAFahrenheit = (celsius) => (celsius * 9/5) + 32;

  const fahrenheitACelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;

  const manejarCambioCelsius = (evento) => {
    const valorCelsius = evento.target.value;
    setCelsius(valorCelsius);
    if (valorCelsius === '') {
      setFahrenheit('');
    } else {
      setFahrenheit(celsiusAFahrenheit(parseFloat(valorCelsius)).toFixed(2));
    }
  };

  const manejarCambioFahrenheit = (evento) => {
    const valorFahrenheit = evento.target.value;
    setFahrenheit(valorFahrenheit);
    if (valorFahrenheit === '') {
      setCelsius('');
    } else {
      setCelsius(fahrenheitACelsius(parseFloat(valorFahrenheit)).toFixed(2));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="container p-4 bg-white rounded shadow-lg">
        <h2 className="text-center mb-4 text-primary">CALCULADORA DE TEMPERATURA</h2>
        <div className="row">
          <div className="col-md-12 mb-3">
            <Temperatura
              label="Introduce la temperatura en grados Celsius"
              value={celsius}
              onChange={manejarCambioCelsius}
              placeholder="Celsius"
              className="form-control custom-input"
            />
          </div>
          <div className="col-md-12 mb-3">
            <Temperatura
              label="Introduce la temperatura en grados Fahrenheit"
              value={fahrenheit}
              onChange={manejarCambioFahrenheit}
              placeholder="Fahrenheit"
              className="form-control custom-input"
            />
          </div>
        </div>
        <div className="mt-4">
          <EstadoAgua temperaturaCelsius={celsius} />
        </div>
      </div>
    </div>
  );
};

export default App;
