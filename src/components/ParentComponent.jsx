import React from 'react'

export const ParentComponent = ({children}) => {
    return (
      <div>
        <h1>Parent</h1>
        {children}
      </div>
    )
}
