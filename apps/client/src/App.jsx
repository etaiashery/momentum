import { useState, useEffect } from 'react'
import Drawer from './Drawer'
import useDrawer from './hooks/useDrawer'
import { CategoriesCard } from './CategoriesCard'
import { hobbies } from './consts/hobbies'
import logo from './assets/momentum logo.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const { isOpen, toggleDrawer, closeDrawer } = useDrawer()

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
          <CategoriesCard hobbieTitles={hobbies} />
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
      <Drawer isOpen={isOpen} onClose={closeDrawer} />
    </div>
  )
}

export default App
