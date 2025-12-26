import { Link } from "react-router-dom";
import './navbar.css';

export default function Navbar() {
    return (
        <div className="nav-container">
            <div className="nav-inside-components">
                <ul className="nav-pages">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/careers">Careers</Link></li>
                </ul>

                <input className="searchbar" placeholder="Search..." />

                <div className='logreg'>
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </div>
        </div>
    );
}
