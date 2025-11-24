import { useState, useCallback } from 'react'

function useDrawer(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState)

  const openDrawer = useCallback(() => setIsOpen(true), [])
  const closeDrawer = useCallback(() => setIsOpen(false), [])
  const toggleDrawer = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  return { isOpen, openDrawer, closeDrawer, toggleDrawer }
}

export default useDrawer
