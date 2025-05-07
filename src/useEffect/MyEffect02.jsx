import React,{ useEffect, useState }  from 'react'

export const MyEffectApp = () => {

    const [cuenta, setCuenta] = useState(0);

    useEffect(() => {
      console.log(`La cuenta es ${cuenta}`);
      document.title = `La cuenta es ${cuenta}`;
    });
  
  return (
    <div>
      <h2>La cuenta es: {cuenta}</h2>
      <button onClick={() => setCuenta(cuenta + 1)}>Aumentar</button>
    </div>
  )
}
