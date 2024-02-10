import React from 'react';
import '../styles/Boton.css';

function Boton({ texto, esBotonDeClic, onClick }) {
  return (
    <button
      className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
      onClick={onClick}>
      {texto}
    </button>
  );
}

export default Boton;