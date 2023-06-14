import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'
import Image from './assets/images/image1.jpg'
import Image2 from './assets/images/img2.jpg'
import Image3 from './assets/images/img3.jpg'
import Button from './components/Button'


function App() {
  

  return (
  
  <div className="container">

    <Cards image={Image}

    title="Silver Heels"
    circle = ""
    color="Silver"
     price="$250"
     close="X"/>
     
     
    <Cards image={Image2} title="Backpack" color='Yellow' price="$250"  close="X"/>
    <Cards image={Image3}title="Silver Ring Set" color='Silver' price="$250"  close="X"/>
    
  </div>

      
  )}

export default App
