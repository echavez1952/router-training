import React,  { useContext } from 'react'
import { DataContext } from './ContextApp2'

export const CompE = () => {
    const { valueContext, setValueContext } = useContext(DataContext);
  
    return (
    <div>
      <p>Componente E</p>
      <p>Datos: {valueContext}</p> 
      <button onClick={() => setValueContext
      (valueContext + 1) }> Sumar 1</button>
    </div>
  )
}
