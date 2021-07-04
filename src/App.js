import React from 'react'
import './App.css';
import { Stickers } from './components/Stickers';
import Navbar from './components/Navbar/Navbar';



const App = () => {
  return (
    <>
      <div>
        <Stickers clasification={"Élite"} colorPalette={{firstColor: "#00e699", secondColor: "#b3fff6", thirdColor: "rgba(179, 255, 246, 0.75)"}}/>
        <Stickers clasification={"Épico"} colorPalette={{firstColor: "#00C4FF", secondColor: "#66dbff", thirdColor: "rgba(102, 219, 255, 0.75)"}}/>
        <Stickers clasification={"Mítico"} colorPalette={{firstColor: "#FF004C", secondColor: "#FF8E53", thirdColor: "rgba(255, 142, 83, 0.75)"}}/>
        <Navbar/>
      </div>
    </>
  )
}

export default App