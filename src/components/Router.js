import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Login';
import Registration from './Registration';
import Dashboard from './user/Dashboard';
import Orders from './user/Orders';
import Profile from './user/Profile';
import Cart from './user/Cart';
import GroceryDisplay from './user/GroceryDisplay';
import AdminDashboard from './admin/AdminDashboard';
import AdminOrders from './admin/AdminOrders';
import List from './admin/List';
import Grocery from './admin/Grocery';

function Router() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/myorders' element={<Orders/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/products' element={<GroceryDisplay/>}/>
      <Route path='/admindashboard' element={<AdminDashboard/>}/>
      <Route path='/adminorders' element={<AdminOrders/>}/>
      <Route path='/list' element={<List/>}/>
      <Route path='/grocery' element={<Grocery/>}/>
    </Routes>
   </Router>
  )
}

export default Router