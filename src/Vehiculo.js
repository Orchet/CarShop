import React,  { useState } from 'react';
import {Comboid} from './catalogos.js';
import Servicios from './Servicios.js';


 const Vehiculo = () => {

    const [mostrarServicio, setMostrarServicio] = useState(false);

    const AvanzarServicio = (e) => {
          e.preventDefault();
          setMostrarServicio(true);
    };

     return (
       <div className='divalinear'>
          {mostrarServicio ? (
              <Servicios/>
          ) : (        
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
                    <button type='submit'  onClick={AvanzarServicio}>Ingresar</button> 
                    <button type='submit'>Regresar</button>                              
                  </div>
              </form>
          )}
       </div>
     );
 }

export default Vehiculo;
