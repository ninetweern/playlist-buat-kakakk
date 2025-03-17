import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Music } from './components'
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Music />} />
      </Routes>
    </Router>
  )
}

export default App
