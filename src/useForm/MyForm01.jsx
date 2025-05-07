import React, { useEffect, useState } from 'react'

export const MyFormApp = () => {

  const [email, setEmail] = useState('');
  const [valid, setValid] = useState('');
  const [name, setName ] = useState('');
  
  useEffect(() => {
    document.title = 'Mi aplicacion Form - React';
  }, []);
  
  useEffect(() => {
    console.log('Estoy en el useEffect del name');
  }, [name])

  useEffect(() => {
    console.log('Estoy en el useEffect del email');
    const regex = /\S+@\S+.\S+/;
    setValid(regex.test(email));
    console.log(valid);
  }, [email])

    // const onMouseMove = (event) => {
    //   console.log(event.target);
    // }

    // window.addEventListener('mousemove', onMouseMove)
  
    // return () => {
    // window.removeEventListener('mousemove', onMouseMove)
    // }

  
  const onHandleChangeName = ({target}) => {
    setName(target.value);
    console.log(name);
  }

  const onHandleChangeMail = ({target}) => {
    setEmail(target.value);
    console.log(email);
  }  

  return (
  <>
    <div>MyFormApp</div>

    <input
      type="text"
      value={name}
      placeholder='Ingrese su nombre'
      onChange={(event) => onHandleChangeName(event)}
    />
    
    <input
      type="email"
      value={email}
      placeholder='example@mail.com'
      onChange={(event) => onHandleChangeMail(event)}
    />

    <p>{valid
      ? ('EL email es valido ')
      : ('El email NO es valido') 
      }
    </p>
  </>
  )
}