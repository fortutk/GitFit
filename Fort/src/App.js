import React, { Component } from 'react';
import SignUp from './signUp';
import Login from './login'
import ForgotP from './forgotP'
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Redirect,
    Link
  } from "react-router-dom";

  function LogIn(){
    return(
      <Login />
    )
  }

  function Signup(){
    return(
      <SignUp/>
    )
  } 

  function Forgotp(){
    return(
      <ForgotP/>
    )
  }

export default function App() {
  return(
    <Router>
       <div>
      <Routes>

        <Route path = "/login" element={<LogIn />} />
        <Route path = "/signup" element={<Signup />} />
        <Route path = "/forgotpassword" element={<Forgotp/>} />
        
      </Routes>
      </div>
    </Router>
  )


  
}
