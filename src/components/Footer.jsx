import "../App.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 BCN Sport Company. All rights reserved.</p>
        <nav>
          <ul>
            <li>
              <a>
                <Link to="/privacy_terms">privacy & terms</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/contact">Contact</Link>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
