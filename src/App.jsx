import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./pages/authentication/login/Login.jsx";
import './App.css'
import Register from './pages/authentication/register/Register.jsx';
import ProtectedRoutes from './ProtectedRoutes.jsx';
import Home from './pages/Home/Home.jsx';
import PasswordReset from './pages/authentication/passwordReset/PasswordReset.jsx';
import Properties from './pages/properties/Properties.jsx';
import SetPassword from './pages/authentication/passwordReset/setPassword.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectedRoutes component={<Home/>}/>}/>
        <Route path='/properties' element={<ProtectedRoutes component={<Properties/>}/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/passwordreset' element={<PasswordReset/>}/>
        <Route path='/setpassword' element={<SetPassword/>}/>
      </Routes>
    </BrowserRouter> 
  )
}

export default App
