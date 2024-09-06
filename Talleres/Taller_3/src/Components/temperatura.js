import React from 'react';

const Temperatura = ({ label, value, onChange, placeholder, className }) => {
  return (
    <div className="mb-3 inputStyle centrar">
      <label className="form-label">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
};

export default Temperatura;
