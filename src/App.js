import React from 'react'
import './App.css';
import { Stickers } from './components/Stickers';
import Navbar from './components/Navbar/Navbar';
import { elites, epicos, miticos } from './components/stickerList';

const App = () => {
  return (
    <>
      <div>
        <Stickers stickerList={elites} clasification={"Élites"} colorPalette={{firstColor: "#00cc88", secondColor: "#33ffbb", thirdColor: "rgba(179, 255, 246, 0.75)"}}/>
        <Stickers stickerList={epicos} clasification={"Épicos"} colorPalette={{firstColor: "#00C4FF", secondColor: "#66dbff", thirdColor: "rgba(102, 219, 255, 0.75)"}}/>
        <Stickers stickerList={miticos} clasification={"Míticos"} colorPalette={{firstColor: "#FF004C", secondColor: "#FF8E53", thirdColor: "rgba(255, 142, 83, 0.75)"}}/>
        <Navbar/>
      </div>
    </>
  )
}

export default App