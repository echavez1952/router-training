import React from 'react'
import "./index.css";
import { createRoot } from 'react-dom/client'


import { MyContext } from './App-Context';
//import { ContextApp } from './components/ContextApp2';
// import { PageContext } from './contexts/PageContext copy';
// import { MyEffectApp } from './useEffect/MyEffect01'
// import { MyEffectApp } from './useEffect/MyEffect02'
// import { MyEffectApp } from './useEffect/MyEffect03'
// import { MyFormApp } from './useForm/MyForm01'|´
// //import { Rutas } from './rutas/AppRutas5'
// import { Profile } from './App-Profile'
// import { AppChildren } from './App-Children1'
// import { App } from './App-Card'
// import { MyContext } from './App-Context'


createRoot(document.getElementById('root')).render(
 
    // <AppChildren />
    // <MyEffectApp />
    // <MyFormApp />
    <MyContext />
    // <Rutas />
    // <App />

)
