import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Card from './components/card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='head-container'>
      <Navbar />
      <Card />
    </div>


  )
}

export default App
