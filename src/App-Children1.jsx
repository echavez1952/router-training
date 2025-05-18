
import React from 'react'
import { ParentComponent } from './components/ParentComponent'

export const AppChildren = () => {
  return (
    <ParentComponent>
      <p>Este es el primer contenido pasado como children</p>
      <p>Este es el segundo contenido pasado como children</p>
      <p>Este es el tercer contenido pasado como children</p>
      <p>Este es el cuarto contenido pasado como children</p>
    </ParentComponent>

  )
}
