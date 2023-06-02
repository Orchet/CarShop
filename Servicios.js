import React, { useState } from 'react';
import Vehiculo from './Vehiculo.js';
import { ServiciosMant } from './catalogos';


 const Servicios = () => {

    const [navPantallas, setNavPantallas] =  useState({
      atras: false,
      adelante: false
    });

    // const Avanzar = () => {
    //       setNavPantallas({...navPantallas, ['atras']:false, ['adelante']:true})
    // };

    const Retroceder = (e) => {
      e.preventDefault();
      setNavPantallas({...navPantallas, ['atras']:true, ['adelante']:false})
    };


    return (
       <div>
          {navPantallas.atras  &&  !navPantallas.adelante  ? <Vehiculo/>:
          (
          <form className='formulario'>
              <div>
                <h2>Catalogo de Servicios</h2>
              </div>          
              <ServiciosMant>
                  <label htmlFor='table'>Escoja los servicios deseados</label>
              </ServiciosMant>
              <div className='button-container'>
              <button type='submit' onClick={Retroceder}>Regresar</button>                              
                <button type='submit'>Orden de Trabajo</button>                 
              </div>                            
          </form>
          )}
       </div>
    );
 }

export default Servicios;
