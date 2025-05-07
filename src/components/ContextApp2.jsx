import React, { createContext, useState, useContext } from 'react'
import { CompA } from './CompA'

export const DataContext = createContext();

export const ContextApp = (props) => {

  const [valueContext, setValueContext] = useState(0);
  
  const valor  = { valueContext, setValueContext };

  return (
    
    <DataContext.Provider value={valor}>
      {props.children}
      <CompA />
    </DataContext.Provider>
  );
}

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within a DataContextProvider');
  }
  return context;
}
