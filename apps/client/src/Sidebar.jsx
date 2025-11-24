import './Sidebar.css'

function Sidebar({ onClose }) {
  return (
    <>
      <div className="sidebar-header">
        <h2>Menu</h2>
        <button className="close-button" onClick={onClose} aria-label="Close drawer">
          ✕
        </button>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <a href="#" className="nav-item active">
              <span>🏠</span>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              <span>📊</span>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              <span>📝</span>
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              <span>⚙️</span>
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Sidebar

