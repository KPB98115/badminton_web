import { Link } from 'react-router-dom';
import "../App.css"

const Header = () => {
    return (
        <header className="header">
            <div>
                <img src="" alt="Badminton Web Logo" />
                <h1>Badminton Web</h1>
            </div>
            <div className="navBar">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/reservation">reservation</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;