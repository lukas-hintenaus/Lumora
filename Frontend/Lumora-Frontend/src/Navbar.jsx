import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Lumora</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li>About</li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}
