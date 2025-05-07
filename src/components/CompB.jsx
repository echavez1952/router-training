import React from 'react'
import { useDataContext } from './ContextApp2'
import { CompC } from './CompC'

export const CompB = () => {
  const { valueContext } = useDataContext();

  return (
    <div>
      <p>Componente B</p>
      <p>Datos: {valueContext}</p>
      <CompC />
    </div>
  )
}

