import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Resume from './components/Resume'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div style={{ border: "1px solid black", padding: '10px' }}>
      <Resume />
    </div>
  )
}

export default App
