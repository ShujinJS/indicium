import "./navbar.bottom.component.style.scss";

// React-Router
import { Link } from "react-router-dom";

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from  "@fortawesome/free-solid-svg-icons";

export default function NavbarBottomComponent(){

    return (
        <div className="bottom-nav-holder">
            <div className="bottom-nav-container">
                <div className="bottom-start-nav">
                    <ul>
                        <li>
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li>
                            <Link to="/candidates" className="nav-link">Candidates</Link>
                        </li>
                        <li>
                            <Link to="/aboutus" className="nav-link">About Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="bottom-end-nav">
                    <ul>
                        <li>
                            <span className="nav-link"><FontAwesomeIcon icon={faUser}/></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}