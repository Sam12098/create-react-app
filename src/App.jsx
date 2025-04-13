import { useState, useEffect } from 'react' // Added useEffect
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [cones, setCones] = useState([]) // State for falling cones

  const handleIceCreamClick = () => {
    // Add a new cone with a random horizontal position and unique key
    const newCone = {
      id: Date.now() + Math.random(), // Unique key
      style: {
        left: `${Math.random() * 95}vw`, // Random horizontal start (0-95vw)
        animationDuration: `${Math.random() * 2 + 3}s` // Random duration (3-5s)
      }
    };
    setCones(prevCones => [...prevCones, newCone]);

    // Optional: Remove cone after animation finishes (e.g., after 5 seconds)
    // This prevents the DOM from filling up indefinitely
    setTimeout(() => {
        setCones(prevCones => prevCones.filter(cone => cone.id !== newCone.id));
    }, 5000); // Match longest possible animation duration + buffer
  }

  return (
    <>
      {/* Render falling cones */}
      {cones.map(cone => (
        <div key={cone.id} className="falling-cone" style={cone.style}>
          🍦
        </div>
      ))}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Sam Sonny</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={handleIceCreamClick} style={{ marginLeft: '10px' }}>
          Make it rain ice cream!
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
