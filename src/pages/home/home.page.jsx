import "./home.page.scss";

import { Link } from "react-router-dom";

function HomePage(){

    return (
        <main>
            <section className="cover">
                <div className="landing-bg">
                    <header className="cover-header">
                        indicium ile kaynak yönetimi hiç bu kadar kolay olmamıştı
                    </header>
                </div>
            </section>
            <section className="area">
                <div className="link-container">
                    <ul className="link-list">
                        <li className="link-item"><Link to="/candidates" className="link">Candidates</Link></li>
                        <li className="link-item"><Link to="/aboutus" className="link">About Us</Link></li>
                    </ul>
                </div>
                <div className="place-filler">
                    <span>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur nobis amet iste quos aperiam vitae veniam accusamus excepturi harum pariatur, laboriosam fugit iusto eius facere architecto voluptate libero deleniti optio!
                    </span>
                </div>
            </section>

            
        </main>
    )
}

export default HomePage;