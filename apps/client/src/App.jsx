import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import logo from './momentum logo.svg/momentum logo.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => {
        setMessage(data.message)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching from server:', err)
        setLoading(false)
      })
  }, [])

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <div className="app-container">
      <div className="App">
        <header className="app-header">
          <div className="logo-container">
            <img src={logo} className="logo" />
          </div>
          <button className="drawer-toggle" onClick={toggleDrawer} aria-label="Toggle drawer">
            ☰
          </button>
        </header>
        <main className="app-main">
          <h1>let's create your MOMENTUM</h1>
          <p>The ultimate Mentor in your phone at your service everywhere any time.</p>
          <button className="success-button">Get Started</button>
          <div className="card">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <p>{message || 'Welcome to your monorepo!'}</p>
            )}
          </div>
          <p className="description">
            React frontend running on Vite + Node.js backend
          </p>
        </main>
      </div>
      <Sidebar isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  )
}

export default App
