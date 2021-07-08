import React from 'react'
import './App.css';
import { Stickers } from './components/Stickers';
import Navbar from './components/Navbar/Navbar';
import { elites, epicos, miticos, gloriaMitica, temporada } from './components/stickerList';

const App = () => {
  return (
    <>
      <div>
        <Stickers stickerList={elites} clasification={"Élites"} colorPalette={{firstColor: "#00cc88", secondColor: "#33ffbb", thirdColor: ""}}/>
        <Stickers stickerList={epicos} clasification={"Épicos"} colorPalette={{firstColor: "#00C4FF", secondColor: "#66dbff", thirdColor: "102, 219, 255, 0.75"}}/>
        <Stickers stickerList={miticos} clasification={"Míticos"} colorPalette={{firstColor: "#FF004C", secondColor: "#FF8E53", thirdColor: "255, 142, 83, 0.75"}}/>
        <Stickers stickerList={gloriaMitica} clasification={"Gloria Mítica"} colorPalette={{firstColor: "#e60073", secondColor: "#ff80bf", thirdColor: "255, 142, 83, 0.75"}} special={true}/>
        <Stickers stickerList={temporada} clasification={"Temporada de Verano 🥭"} colorPalette={{firstColor: "#FDC830", secondColor: "#F37335", thirdColor: "0, 0, 0, 0.75"}} season={true}/>
        <Navbar/>
      </div>
    </>
  )
}

export default App