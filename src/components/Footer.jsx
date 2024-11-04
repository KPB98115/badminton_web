import "../App.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Badminton Web. All rights reserved.</p>
                <nav>
                    <ul>
                        <li>
                            <img
                                src="https://img.icons8.com/?size=100&id=13912&format=png&color=000000"
                                alt="icon"
                            />
                            <Link to="/">Facebook</Link>
                        </li>
                        <li>
                            <img
                                src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"
                                alt="icon"
                            />
                            <Link to="/about">Instagram</Link>
                        </li>
                        <li>
                            <img
                                src="https://img.icons8.com/?size=100&id=12776&format=png&color=000000"
                                alt="icon"
                            />
                            <Link to="/reservation">reservation</Link>
                        </li>
                        <li>
                            <img
                                src="https://img.icons8.com/?size=100&id=RAJumtHjdFxO&format=png&color=000000"
                                alt="icon"
                            />
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
