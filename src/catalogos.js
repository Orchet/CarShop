 const opcionesId = [
   { value: '1', label: 'Cedula' },
   { value: '2', label: 'RUC' },
   { value: '3', label: 'Pasaporte' }
 ]



export default function Comboid({ children }) {
  return (
  <div>    
    { children }
    <select name="select">
    {opcionesId.map(option => (
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
