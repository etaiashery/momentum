import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)

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
    <div className="App">
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
  )
}

export default App
