
import React from 'react'
import { ParentComponent } from './components/ParentComponent'

export const AppChildren = () => {
  return (
    <ParentComponent>
      <p>Este es el contenido pasado como children</p>
      <p>Este es el contenido pasado como children</p>
      <p>Este es el contenido pasado como children</p>
      <p>Este es el contenido pasado como children</p>
    </ParentComponent>

  )
}
