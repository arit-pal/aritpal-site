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
                        Software Developer Specializing in <span className="gradient-text">Backend Systems</span>
                    </h1>
                    <p className="main-subheadline">
                        I engineer high-performance microservices and secure, scalable distributed systems using <strong>Go</strong> and <strong>Java</strong>. Focused on Domain-Driven Design, API optimization, and managing large-scale data to build robust enterprise applications.
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
