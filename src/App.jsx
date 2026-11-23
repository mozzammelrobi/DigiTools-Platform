import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Rating from './components/Rating/Rating'
import ToolsContest from './components/ToolsContent/ToolsContest'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'

const productPromise = axios.get('data.json')

function App() {
  const [cartProducts, setCartProducts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  // console.log('cart', cartProducts)

  return (
    <>
      <Navbar cartProducts={cartProducts} />
      <Banner />
      <Rating />
      <div className='max-w-300 mx-auto'>

        <ToolsContest
          productPromise={productPromise}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />

      </div>
      <ToastContainer />
    </>
  )
}

export default App
