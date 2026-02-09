import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">
          <span className="plant-icon">🌿</span>
          Paradise Nursery
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart" className="cart-link">
            <span className="cart-icon">🛒</span>
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
