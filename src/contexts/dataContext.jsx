import { createContext } from 'react';

export const DataContext = createContext();

export const DataContextProvider = (props) => {
  const contextData = 58;
  
  const valor = contextData;
  
  return (
    <DataContext.Provider value={valor}>
      {props.children}
    </DataContext.Provider>
  );

}