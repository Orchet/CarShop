import React,  { useState } from 'react';
import {Comboid} from './catalogos.js';
import Vehiculo from './Vehiculo.js';

import useForm from './useForm.js';

 const Cliente = () => {

    const dataInicial ={  
      nombre:'',
      email:'',
      celular:'',
      tipoid:'',
      identificacion:''
    }

    const onValidate = (form) => {
      let isError = false
      let errors = {}

      if (!form.nombre.trim()) {
        console.log (form.nombre.trim())
        errors.nombre = 'El campo Nombre no debe estar vacio'
        isError=true
      }
      return isError ? errors : null
    }

    const { form, errors, loading, handleChange, handleSubmit} = useForm(dataInicial, onValidate)

    const [mostrarVehiculo, setMostrarVehiculo] = useState(false);

    const AvanzarVehiculo = (e) => {
         e.preventDefault();
         setMostrarVehiculo(true);
    };

     return (
       <div> 
          {mostrarVehiculo ? (
              <Vehiculo/>              
          ) : (
              <form className='formulario' onClick ={handleSubmit}>
                <div>
                  <h2>Ingreso de Datos del Cliente</h2>
                </div>
                <div>
                  <label htmlFor='nombre'>Nombres</label>
                  <input type='text' id='nombre'  onChange={handleChange}/>
                  {errors.nombre && <div>Ingresar nombre</div>}
                </div>
                <div>
                  <label htmlFor='email'>Email</label>
                  <input type='email' id='email' placeholder='correo@correo.com' value={form.email} onChange={handleChange}/>     
                </div>
                <div>
                  <label htmlFor='number'>Celular</label>
                  <input type='text' id='number' placeholder='0999999999' value={form.celular} onChange={handleChange}/>
                </div>
                <Comboid opcion='id'>
                  <label htmlFor='combo'>Tipo Identificacion</label>
                </Comboid>               
                <div>
                  <label htmlFor='identificacion'>Identificacion</label>
                  <input type='text' id='identificacion' placeholder='0999999999' value={form.identificacion} onChange={handleChange}/>
                </div>       
                <button type='submit'>Ingresar</button> 
                {/* <button type='submit'  onClick ={AvanzarVehiculo}>Ingresar</button>            */}
              </form>
          )}
       </div>
     );
 }

export default Cliente;
