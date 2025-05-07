import React from 'react'

export const Card = (props) => {

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div>{props.children}</div>
    </div>
  )
}

//   return (
//     <div className="w-full h-9  bg-blue-100 border border-black-400 rounded-lg p-10 shadow-lg max-w-md">
//         {children}
//     </div>
//   )
// }
