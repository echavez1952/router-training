import React, { useState } from 'react'

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    
    <div className=" flex items-center">

      <form className="bg-gray-300 border border-red-400 rounded-lg p-10 shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center mb-6">Log In</h1>
          <div>
            <label>Username:</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-white border border-red-300 rounded-md text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label>Password:</label><br />
            <input 
              type="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              className="w-full bg-white border border-red-300 rounded-md text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-lg border border-black transition-colors mt-4"
            >
              Ingresar
              </button>
      </form>
    </div>
  )
}
