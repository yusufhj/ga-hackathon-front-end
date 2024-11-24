import './NavBar.css'
import { Link } from 'react-router-dom';

const NavBar = ({ user, handleSignout }) => {
  return (
    <main>
      { user ? (
        <nav>
          <ul className='navbar'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/orders">Orders</Link></li>
            <li><Link to="" onClick={handleSignout}>Sign Out</Link></li>
          </ul>
        </nav>
      ) : (
        <nav>
          <ul className='navbar'>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      )}
    </main>
  )
}

export default NavBar;