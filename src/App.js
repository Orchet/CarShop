import React from 'react';
import Comboid from './catalogos.js';

 const Formulario = () => {
     return (
       <div className='divalinear'>
         <form className='formulario'>
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
             <Comboid>
              <label htmlFor='combo'>Tipo Identificacion</label>
             </Comboid>               
             <div>
               <label htmlFor='identificacion'>Identificacion</label>
               <input type='text' id='identificacion' placeholder='0999999999'/>
             </div>       
             <button type='submit'>Ingresar</button>           
         </form>
       </div>
     );
 }

export default Formulario;
