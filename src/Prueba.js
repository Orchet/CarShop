import React, { useState } from 'react';

const Formulario1 = ({ onNext }) => {
  return (
    <div>
      <h2>Formulario 1</h2>
      <button onClick={onNext}>Siguiente</button>
    </div>
  );
};

const Formulario2 = ({ onPrevious }) => {
  return (
    <div>
      <h2>Formulario 2</h2>
      <button onClick={onPrevious}>Anterior</button>
    </div>
  );
};

const App = () => {
  const [mostrarFormulario1, setMostrarFormulario1] = useState(true);

  console.log(mostrarFormulario1);

  const handleNext = () => {
    setMostrarFormulario1(false);
  };

  const handlePrevious = () => {
    setMostrarFormulario1(true);
  };

  return (
    <div>
      {mostrarFormulario1 ? (
        <Formulario1 onNext={handleNext} />
      ) : (
        <Formulario2 onPrevious={handlePrevious} />
      )}
    </div>
  );
};

export default App;
