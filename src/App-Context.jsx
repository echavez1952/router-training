import React from 'react'
// import { ContextApp } from './contexts/PageContext'
// import { ContextApp } from './contexts/UserContext'
import { ContextApp } from './contexts/SumarContext'




export const MyContext = () => {
 
  return (
    <div className="m-6">
      <h1 className="text-3xl font-bold text-red-600">useContext Hook</h1>
        <ContextApp/> 
    </div>
  )
}
