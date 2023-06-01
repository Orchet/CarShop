 const opcionesId = [
   { value: '1', label: 'Cedula' },
   { value: '2', label: 'RUC' },
   { value: '3', label: 'Pasaporte' }
 ]

 const marcasVehiculo = [
  { value: '1', label: 'Honda' },
  { value: '2', label: 'KIA' },
  { value: '4', label: 'Chevrolet' },
  { value: '5', label: 'Skoda' },
  { value: '6', label: 'Audi' },
  { value: '7', label: 'Mazda' },
  { value: '8', label: 'Hyundai' }
]

const nivelGasolina = [
  { value: '1', label: '25  %' },
  { value: '2', label: '50  %' },
  { value: '4', label: '75  %' },
  { value: '5', label: '100 %' }
]

 const serviciosMantenimiento = [
   { value: '1', label: 'Cambio de Aceite' },
   { value: '2', label: 'Cambio de Frenos' },
   { value: '4', label: 'Alineacion y Balanceo' },
   { value: '5', label: 'Diagnostico General' },
   { value: '6', label: 'Revision Sistema Electrico' },
   { value: '7', label: 'Limpieza de Inyectores' },
   { value: '8', label: 'Lavado y Encerado' }
]

export function Comboid({opcion, children}) {
  let opciones =[]
  if( opcion === 'id'){
    opciones = opcionesId
  } else if( opcion === 'car'){
    opciones = marcasVehiculo
  } else if( opcion === 'gas'){
    opciones = nivelGasolina
  }
  return (
  <div>    
    { children }
    <select name="select">
    {opciones.map(option => (
        <ItemsId
          value = {option.value}
          label={option.label}
        />
      ))}
    </select>
  </div>
  );
}

export function ItemsId({value, label}) {
  return (
    <option value={value}>{label}</option>
  );
}

export function ServiciosMant({children}) {
   return (
     <div>   
        { children }
         <table>
         <tr>
          <th>Detalle</th>
          <th></th>
        </tr>
        {serviciosMantenimiento.map((servicio) => (
          <tr>
            <td>{servicio.label}</td>
            <input type="checkbox" />
          </tr>
        ))}
         </table>
     </div>
   );
}