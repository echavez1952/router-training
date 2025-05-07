import React, { useEffect, useState } from 'react'

export const MyEffectApp = () => {

  const [mostrar, setMostrar] = useState(true);

  const MouseColor = () => {
    const [color, setColor] = useState("orange");
    
    useEffect(() => { 
      function onMouseMove(evento) {
        if (evento.clientX < window.innerWidth / 2) {
          setColor("orange");
        } else {
          setColor("blue");
        }
      }

      window.addEventListener("mousemove", onMouseMove)
      console.log("EJECUTANDO");

      return () => {
        console.log("LIMPIANDO");
        window.removeEventListener('mousemove', onMouseMove)
      };
    
    }, [])
    
    console.log("Ocurrio el render");
    return <div style={{ height: "100vh", background: color }} />;
  }
  
  return (
    <div>
      <button onClick={() => setMostrar(false)}>Deja de mostrar</button>
      {mostrar ? <MouseColor /> : null}
    </div>
  )

}
