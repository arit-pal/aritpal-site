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
                            <div className="card-preview icon-preview">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="brand-icon github-icon" />
                            </div>
                            <div className="card-content">
                                <h2>GitHub</h2>
                                <p>Explore my source code, projects, and open-source contributions.</p>
                            </div>
                        </a>

                        <a href="https://linkedin.com/in/aritpal" target="_blank" rel="noopener noreferrer" className="connect-card">
                            <div className="card-preview icon-preview">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="brand-icon" />
                            </div>
                            <div className="card-content">
                                <h2>LinkedIn</h2>
                                <p>Connect with me professionally and view my work history.</p>
                            </div>
                        </a>

                        <a href="mailto:itsaritpal@gmail.com" className="connect-card">
                            <div className="card-preview icon-preview">
                                <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons@latest/icons/envelope.svg" alt="Email" className="brand-icon email-icon" />
                            </div>
                            <div className="card-content">
                                <h2>Email</h2>
                                <p>Reach out directly for opportunities or just to say hello.</p>
                            </div>
                        </a>

                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="connect-card">
                            <div className="card-preview">
                                <div className="card-preview-overlay"></div>
                                <iframe src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH" title="Resume Preview" loading="lazy" tabIndex="-1" className="preview-media"></iframe>
                            </div>
                            <div className="card-content">
                                <h2>Resume</h2>
                                <p>View or download my professional experience and skills.</p>
                            </div>
                        </a>
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
