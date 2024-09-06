import React from 'react';

const EstadoAgua = ({ temperaturaCelsius }) => {
  const determinarTemperaturaAgua = (tempCelsius) => {
    if (tempCelsius < 0) {
      return 'El agua está muy fría, por debajo del punto de congelación.';
    } else if (tempCelsius >= 0 && tempCelsius < 10) {
      return 'El agua está fría.';
    } else if (tempCelsius >= 10 && tempCelsius < 20) {
      return 'El agua está templada.';
    } else if (tempCelsius >= 20 && tempCelsius < 40) {
      return 'El agua está caliente.';
    } else if (tempCelsius >= 40 && tempCelsius < 60){
      return 'El agua está muy caliente.';
    } else {
      return 'Error'
    }
  };

  return (
    <p className='centrar'>{temperaturaCelsius !== '' ? determinarTemperaturaAgua(parseFloat(temperaturaCelsius)) : ''}</p>
  );
};

export default EstadoAgua;