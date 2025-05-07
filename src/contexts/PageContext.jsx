import React from 'react'
import { createContext } from 'react';

export const PageContext = () => {

  const PageNameContext = createContext();

  const ParentPage = () => (
    <PageNameContext.Provider value="ParentPage">
      <h1>Parent page title</h1>
      <ChildComponent />
    </PageNameContext.Provider>
  );

  const ChildComponent = () => {
    const pageName = useContext(PageNameContext);

    return (
      <p>This a sub-component, nested in the {pageName} page</p>
    );
  };

}

export const UserContext = createContext();
const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component1 />
    </UserContext.Provider>
  );

  function Component1() {
    return (
      <>
        <h1>Component 1</h1>
        <Component2 />
      </>
    );
  }