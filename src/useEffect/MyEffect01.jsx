import React from 'react'
import { useState, useEffect } from 'react'

export const MyEffectApp = () => {
  const [count, setCounter] = useState(0);

  useEffect(() => {
    // funcion que contiene el codigo del efecto secundario   
    console.log("Ejecuta el useEffect");
    console.log(`Hiciste click ${count} veces`); 
  }, [count]); // Este efecto solo se ejecuta cuando cambia 'count'
  
  return (
    <>
      <p>Count: {count} </p>
      <button onClick={() => {
        setCounter(count + 1);
      }}>Increase
      </button>
    </>
  )
}