import Sidebar from './Sidebar'
import './Sidebar.css'

function Drawer({ isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className="drawer-overlay" onClick={onClose} />}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <Sidebar onClose={onClose} />
      </aside>
    </>
  )
}

export default Drawer
