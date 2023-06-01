import React from 'react';
import { ServiciosMant } from './catalogos';


 const Servicios = () => {
     return (
       <div className='divalinear'>
         <form className='formulario'>
             <div>
               <h2>Catalogo de Servicios</h2>
             </div>          
             <ServiciosMant>
                <label htmlFor='table'>Escoja los servicios deseados</label>
             </ServiciosMant>
             <div className='button-container'>
              <button type='submit'>Orden de Trabajo</button> 
              <button type='submit'>Regresar</button>                              
             </div>                            
         </form>
       </div>
     );
 }

export default Servicios;
