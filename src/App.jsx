import { useState } from 'react'
import './App.css'
import Countries from './components/countries/countries'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>World Tour</h1>
      <Countries></Countries>
    </div>
  )
}

export default App
