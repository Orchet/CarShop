import React,  { useState } from 'react';
import {Comboid} from './catalogos.js';
import Servicios from './Servicios.js';
import Cliente from './Cliente.js';


 const Vehiculo = () => {

    const [navPantallas, setNavPantallas] =  useState({
      atras: false,
      adelante: false
   });

    const Avanzar = (e) => {
          e.preventDefault();
          setNavPantallas({...navPantallas, ['atras']:false, ['adelante']:true})
    };

    const Retroceder = () => {
      setNavPantallas({...navPantallas, ['atras']:true, ['adelante']:false})
    };

     return (
       <div>
          {!navPantallas.atras  &&  navPantallas.adelante  ? <Servicios/>:
            navPantallas.atras  && !navPantallas.adelante  ? <Cliente/>:   
            (        
              <form className='formulario'>
                  <div>
                    <h2>Ingreso de Datos del Vehiculo</h2>
                  </div>       
                  <Comboid opcion='car'>
                    <label htmlFor='combo'>Marca</label>
                  </Comboid>                
                  <div>
                    <label htmlFor='modelo'>Modelo</label>
                    <input type='text' id='modelo' placeholder='Kia'/>
                  </div>
                  <div>
                    <label htmlFor='placa'>Placa</label>
                    <input type='text' id='placa' placeholder='GHR-1234'/>
                  </div>
                  <Comboid  opcion='gas'>
                    <label htmlFor='combo'>Nivel Tanque Gasolina</label>
                  </Comboid>    
                  <div>
                    <label htmlFor='Obervaciones'>Obervaciones</label>
                    <textarea placeholder='Condiciones exteriores vehiculo'/>
                  </div>   
                  <div className='button-container'>                    
                    <button type='submit' onClick={Retroceder}>Regresar</button>    
                    <button type='submit' onClick={Avanzar}>Ingresar</button>                           
                  </div>
              </form>
          )}
       </div>
     );
 }

export default Vehiculo;
