import {useState} from 'react'


function Contador() {
   const [contador, setContador] = useState(0);
      console.log (`El contador va por: ${contador}`)
      console.log (`El componente se renderizo`)
    return (
    <div>
     <button onClick={()=>setContador (contador +1)}>Agregar</button>
     <h3>{contador}</h3>
     <button onClick={()=>setContador (contador -1)}>Quitar</button>
    </div>
 )
}

export default Contador;