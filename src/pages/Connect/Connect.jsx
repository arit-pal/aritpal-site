import "./Connect.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Connect = () => {
    return (
        <div className="connect-page-container">
            <header>
                <Header />
            </header>

            <main className="connect-main-content">
                <div className="connect-main-container animate-fade-in">
                    <div className="connect-decorator-line"></div>
                    <h1 className="connect-title">CONNECT</h1>

                    <div className="connect-links-grid">
                        <a href="https://github.com/arit-pal" target="_blank" rel="noopener noreferrer" className="connect-card">
                            <h2>GitHub</h2>
                            <p>Explore my source code, projects, and open-source contributions.</p>
                        </a>

                        <a href="https://linkedin.com/in/aritpal" target="_blank" rel="noopener noreferrer" className="connect-card">
                            <h2>LinkedIn</h2>
                            <p>Connect with me professionally and view my work history.</p>
                        </a>

                        <a href="mailto:itsaritpal@gmail.com" className="connect-card">
                            <h2>Email</h2>
                            <p>Reach out directly for opportunities or just to say hello.</p>
                        </a>

                        <div className="connect-card disabled">
                            <h2>Resume</h2>
                            <p>Coming soon. I will be uploading my detailed resume here shortly.</p>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Connect;
