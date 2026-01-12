import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentSearch from './components/StudentSearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <StudentSearch/>
      </div>
     
   
    </>
  )
}

export default App
