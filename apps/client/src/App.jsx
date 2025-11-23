import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
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
        <button className="drawer-toggle" onClick={toggleDrawer} aria-label="Toggle drawer">
          ☰
        </button>
        <h1>Momentum App</h1>
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
      </div>
      <Sidebar isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  )
}

export default App
