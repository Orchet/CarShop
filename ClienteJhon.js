import { useState } from 'react';
import { useAppContext } from './AppProvider';
import Orden from './Orden';
import Vehiculo from './Vehiculo';


const tipoId = ['Cédula', 'Ruc', 'Pasaporte']

export default function Cliente () {

  //seccion declaraciones properties
  const { dispatch } = useAppContext();

  const [nombres, setNombres] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [identificacionFiscal, setIdentificacionFiscal] = useState('');
  const [tidpid, setTipoIp] = useState('');
  const [mostrarVehiculo, setMostrarVehiculo] = useState(false);

  //methods
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log({nombres, email, celular, identificacionFiscal, tidpid})
    const cliente = { 
      nombres, 
      email, 
      celular, 
      identificacionFiscal, 
      tidpid
    };
    //console.log(cliente); 
    /*dispatch({
        type: 'ADD_CLIENTE',
        value: cliente  
    });*/
    setMostrarVehiculo(true);

  }



//seccion vista
  if(mostrarVehiculo){
    return (<div> <Vehiculo /> </div>)
  }


    return (
        <div>       
          <form className='form-react' onSubmit={handleSubmit}>     
              <h2>Datos del Cliente</h2>
              <div className='form-control'>
                  <label htmlFor="nombre">Nombres</label>
                  <input 
                    type="text" 
                    id="nombre" 
                    placeholder="Alex Vera"
                    onChange={(e)=> setNombres(e.target.value)}
                  />
              </div>
              <div className='form-control'>
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="avera@bolivariano.com"
                    onChange={(e)=> setEmail(e.target.value)}
                  />
              </div>
              <div className='form-control'>
                  <label htmlFor="celular">Celular</label>
                  <input 
                    type="text" 
                    id="celular" 
                    placeholder="0960541132"
                    onChange={(e)=> setCelular(e.target.value)}
                  />
              </div>
              <div className='form-control'>
                  <label htmlFor="identificacion">Identificación Fiscal</label>
                  <input 
                    type="text" 
                    id="identificacion" 
                    placeholder="0915932644"
                    onChange={(e)=> setIdentificacionFiscal(e.target.value)}
                  />
              </div>

              <div className='form-control'>
                <label htmlFor="tipo_id">Tipo de Identificación</label>
                <div className='caja'>
                  <select id='tipo_id' onChange={(e)=> setTipoIp(e.target.value)}>
                    {tipoId.map(item => (
                      <option value={item}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>

                <div className='form-react'>
                      <button type="submit">Enviar</button>
                </div>  
          </form>     
        </div>
        );
  }