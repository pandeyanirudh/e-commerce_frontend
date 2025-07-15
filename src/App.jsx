import React from 'react'
import {Route,  Routes } from 'react-router-dom'
// React components should be capitalized to distinguish them from HTML tags.  [Navbar]
import Navbar from './components/navbar/navbar'
import Home from './pages/Home/home'
import Cart from './pages/Cart/cart'
import PlaceOrder from './pages/PlaceOrder/placeOrder'
import Footer from './components/footer/footer'

const App = () => {
  return (
    // we will insert everything into the fragment otherwise it will give error
    // now it is returning only one element
    <>
    <div className='app'>
      <Navbar/>
      <Routes>
        {/* Inside this well create multiple routes */}
        <Route path = '/' element={<Home/>}/>
        <Route path = '/cart' element={<Cart/>}/>
        <Route path = '/placeOrder' element={<PlaceOrder/>}/>
      </Routes>
      </div>
      <Footer/>
    </>
    
  )
}

export default App