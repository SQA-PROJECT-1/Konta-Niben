import React from 'react'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Outlet />
      <h1>Handshake</h1>
    </div>
  )
}

export default App
