import { useState } from 'react'
import imgaes1 from './assets/imgaes/img1.jpg'
import imgaes2 from './assets/imgaes/img2.jpg'
import imgaes3 from './assets/imgaes/img3.jpg'
import images4 from './assets/imgaes/img4.jpg'

import './App.css'
import Cards from './components/Cards'

function App() {
 
  return (
    <>
     <Cards 
     images={imgaes1}
     title="Italian pizza with tomatos topping and leaves"
     text='BEST FOR ALL'
     symbol='+'
     price='$25.14'
     />
     <Cards
     images={imgaes2}
     title="Napiletana spicy pizza with mashroom and leaves"
     text='TOP CHOOICE'
     symbol='+'
     price='$55.00'
     />
     <Cards
     images={imgaes3}
     title="Calofonia pizza with leaves and olives"
     text='FOR KIDS'
     symbol='+'
     price='$40.00'
     />
     <Cards
     images={images4}
     title="Italian pizza with tomatos topping and leaves"
     text='BEST IN VEGAN'
     symbol='+'
     price='$25.14'
     />
    </>
  )
}

export default App
