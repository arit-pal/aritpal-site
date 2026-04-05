import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Home = () => {
    return (
        <div className="home-page-container">
            <header>
                <Header />
            </header>

            <main className="home-main-content">
                <div className="home-main-content-container animate-fade-in">
                    <p className="micro-greeting">Hi, I'm Arit Pal</p>
                    <h1 className="main-headline">
                        Software Engineer Specializing in <span className="gradient-text">Backend Development</span>
                    </h1>
                    <p className="main-subheadline">
                        I architect robust, scalable systems that power dynamic applications. With a strong focus on Go and PostgreSQL, I build the high-performance engines that drive the modern web.
                    </p>
                    <div className="cta-group">
                        <Link to="/about" className="cta-button">
                            Learn More About Me
                        </Link>
                        <Link to="/connect" className="cta-button-secondary">
                            Let's Connect
                        </Link>
                    </div>
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Home;
