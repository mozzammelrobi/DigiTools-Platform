import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Rating from './components/Rating/Rating'
import ToolsContest from './components/ToolsContent/ToolsContest'
import axios from 'axios'


const productPromise = axios.get('data.json')

function App() {


  return (
    <>
      <Navbar />
      <Banner />
      <Rating />
      <div className='max-w-300 mx-auto'>
        <ToolsContest productPromise={productPromise} />

      </div>
    </>
  )
}

export default App
