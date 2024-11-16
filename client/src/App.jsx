import { useState, useEffect } from 'react'
import './App.css'
import Top from './assets/components/Nav';
import Home from './assets/components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then(console.log)
  }
  , [])

  return (
    <>
      <Top />
      <Home />
    </>
  )
}

export default App
