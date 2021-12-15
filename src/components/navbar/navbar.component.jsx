import "./navbar.component.style.scss";

import { Link } from "react-router-dom";

// Components
import NavbarBottomComponent from "./navbar-bottom/navbar.bottom.component";

export default function NavbarComponent(){

    return(
        <>
            <nav>
                <div className="top-nav-container">
                    <div className="top-start-nav">
                        <Link to="/" className="brand-logo">indicium</Link>
                    </div>
                    <div className="top-end-nav">
                        <ul>
                            <li><Link to="" className="dummy-link">Link</Link></li>
                            <li><Link to="" className="dummy-link">Link</Link></li>
                            <li><Link to="" className="dummy-link">Link</Link></li>
                        </ul>
                    </div>
                </div>

                <NavbarBottomComponent/>
            </nav>
        </>
    )
}