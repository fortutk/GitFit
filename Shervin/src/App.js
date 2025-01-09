// import React, { Component } from 'react';
import './App.css';
import BMI from './bmi.js'
import Calorie from './calorie.js'
import Rep from './maxrep.js'
import Rate from './heart_rate.js'
import Protein from './protein.js'
// import Background from './background.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return(
    <Router>
       <div>
      <Routes>

        <Route path = "/bmi" element={<BMI />} />
        <Route path = "/calorie" element={<Calorie />} />
        <Route path = "/rep" element={<Rep/>} />
        <Route path = "/rate" element={<Rate />} />
        <Route path = "/protein" element={<Protein/>} />
      </Routes>
      </div>
    </Router>
  )
}