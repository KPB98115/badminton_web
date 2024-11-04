import { Link } from "react-router-dom";
import "../App.css";
import badminton_icon from "../assets/images/badminton_icon.png";

const Header = () => {
    return (
        <header className="header">
            <div className="icon_container">
                <img src={badminton_icon} alt="Badminton Web Logo" />
                <h1>Badminton Web</h1>
            </div>
            <div className="navBar_container">
                <div className="navBar_wrapper">
                    <nav id="navBar">
                        <a>
                            <Link to="/">Home</Link>
                        </a>
                        <a>
                            <Link to="/about">About</Link>
                        </a>
                        <a>
                            <Link to="/reservation">reservation</Link>
                        </a>
                        <a>
                            <Link to="/contact">Contact</Link>
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
