import React,  { useState } from 'react';
import {Comboid} from './catalogos.js';
import Vehiculo from './Vehiculo.js';


 const Cliente = () => {

    const [mostrarVehiculo, setMostrarVehiculo] = useState(false);

    const AvanzarVehiculo = (e) => {
         e.preventDefault();
         setMostrarVehiculo(true);
    };

     return (
       <div className='divalinear'>
          {mostrarVehiculo ? (
              <Vehiculo/>
          ) : (
              <form className='formulario'>
                <div>
                  <h2>Ingreso de Datos del Cliente</h2>
                </div>
                <div>
                  <label htmlFor='nombre'>Nombres</label>
                  <input type='text' id='nombre' placeholder='Christian Ortiz'/>
                </div>
                <div>
                  <label htmlFor='email'>Email</label>
                  <input type='email' id='email' placeholder='correo@correo.com'/>
                </div>
                <div>
                  <label htmlFor='number'>Celular</label>
                  <input type='text' id='number' placeholder='0999999999'/>
                </div>
                <Comboid opcion='id'>
                  <label htmlFor='combo'>Tipo Identificacion</label>
                </Comboid>               
                <div>
                  <label htmlFor='identificacion'>Identificacion</label>
                  <input type='text' id='identificacion' placeholder='0999999999'/>
                </div>       
                <button type='submit' onClick={AvanzarVehiculo}>Ingresar</button>           
              </form>
          )}
       </div>
     );
 }

export default Cliente;
