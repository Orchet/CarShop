import React,  { useState } from 'react';
import { useAppContext } from './AppProvider';
import {Comboid} from './catalogos.js';
import Vehiculo from './Vehiculo.js';

//import useForm from './useForm.js';

 const Cliente = () => {

    // const dataInicial ={  
    //   nombre:'',
    //   email:'',
    //   celular:'',
    //   tipoid:'',
    //   identificacion:''
    // }

    // const onValidate = (form) => {
    //   let isError = false
    //   let errors = {}

    //   if (!form.nombre.trim()) {
    //     console.log (form.nombre.trim())
    //     errors.nombre = 'El campo Nombre no debe estar vacio'
    //     isError=true
    //   }
    //   return isError ? errors : null
    // }

    // const { form, errors, loading, handleChange, handleSubmit} = useForm(dataInicial, onValidate)

    const {dispatch} = useAppContext();

    const [mostrarVehiculo, setMostrarVehiculo] = useState(false);

    const [datosCliente, setDatosCliente] =  useState({
       nombre:'',
       email:'',
       celular:'',
       tipoid:'',
       identificacion:''
    });

    const handleSubmit = (event) => {
      event.preventDefault();
      const enviar_cliente = { 
        nombres, 
        email, 
        celular, 
        tidpid, 
        identificacion
      };
      dispatch({
          type: 'Pantalla_Cliente',
          value: enviar_cliente  
      });
      setMostrarVehiculo(true);
  
    }    

    // const AvanzarVehiculo = (e) => {
    //      e.preventDefault();
    //      setMostrarVehiculo(true);
    // };

    if(mostrarVehiculo){
      return (<div> <Vehiculo /> </div>)
    }

     return (
       <div> 
          <form className='formulario' onClick ={handleSubmit}>
            <div>
              <h2>Ingreso de Datos del Cliente</h2>
            </div>
            <div>
              <label htmlFor='nombre'>Nombres</label>
              <input type='text' id='nombre' placeholder='Christian Ortiz' 
                      onChange={(event)=> setDatosCliente({...datosCliente, ['nombre']:event.target.value})} />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' placeholder='correo@correo.com'
                      onChange={(event)=> setDatosCliente({...datosCliente, ['email']:event.target.value})} />     
            </div>
            <div>
              <label htmlFor='number'>Celular</label>
              <input type='text' id='number' placeholder='0999999999'
                      onChange={(event)=> setDatosCliente({...datosCliente, ['number']:event.target.value})} />
            </div>
            <Comboid opcion='id'>  
              <label htmlFor='combo'>Tipo Identificacion</label>        
              {/* event.target[event.target.selectedIndex].text  ---> poner catalogo.js  */}
            </Comboid>               
            <div>
              <label htmlFor='identificacion'>Identificacion</label>
              <input type='text' id='identificacion' placeholder='0999999999'
                      onChange={(event)=> setDatosCliente({...datosCliente, ['identificacion']:event.target.value})} />
            </div>       
            <button type='submit'>Ingresar</button> 
          </form>
       </div>
     );
 }

export default Cliente;
