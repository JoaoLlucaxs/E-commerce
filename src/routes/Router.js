import {Routes,Route,Navigate} from 'react-router-dom'
import React from 'react'
import Home from '../pages/Home/Home'
import Shop from '../pages/Shop/Shop'
import Cart from '../pages/Cart/Cart'
import Product from '../pages/ProductDetail/ProductDetails'
import Checkout from '../pages/Checkout/Checkout'
import Login from '../pages/Login/Login'
import Logout from '../pages/Logout/Logout'


function Router() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='home'/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='shop/:id' element={<Product/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='logout' element={<Logout/>}/>
    </Routes>
  )
}

export default Router