import './navbar.css'
export default function Navbar() {
    return (
        <div className="nav-container">
            <div className="nav-inside-components">
                <ul className="nav-pages">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>

                <input className="searchbar">
                </input>
                
                <button>Login</button>

            </div>

        </div>
    );
}