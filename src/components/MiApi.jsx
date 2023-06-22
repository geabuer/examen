import React, { useEffect, useState } from 'react'
import { getUsers } from '../services/User';
const MiApi = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [filtro, setFiltro] = useState("");
    useEffect (()=>{
        consultarInformacion()
    },[])
    const consultarInformacion = async () => {
        const datos = await getUsers()
        setUsuarios ([...datos]) } 
  return (
    <div>
    
    <div>
      <input onChange={(e)=>setFiltro(e.target.value)}></input>  
      <ul>
        {
          usuarios.sort((a,b)=> a.name.localeCompare(b.name)).filter(usuario=>usuario.name.toLowerCase().includes(filtro.toLowerCase())).map((usuario,i)=>{
            return(
              <li key={i}>{usuario.name}</li>
            )
          })
        }
      </ul>
                              
    </div>
</div>
  )
}

export default MiApi