import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Stickers } from './components/Stickers'
import './App.css';

const App = () => {
  return (
    <div>
      <Stickers/>
      <Navbar/>
    </div>
  )
}

export default App
