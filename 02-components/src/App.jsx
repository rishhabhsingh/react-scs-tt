import React from 'react'
import Card from './components/card.jsx'
import Navbar from './components/navbar.jsx'

const App = () => {
  return (
    <div class="app">
      <h1>Welcome to React Components!</h1>
      <p>This is a simple React application demonstrating component structure.</p>

      <Card />
      <Navbar />
    </div>
  )
}

export default App
