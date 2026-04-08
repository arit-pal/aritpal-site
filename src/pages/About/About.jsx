import "./About.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const About = () => {
    return (
        <div className="about-page-container">
            <header>
                <Header />
            </header>

            <main className="main-content">
                <div className="main-content-container animate-fade-in">
                    <div className="decorator-line"></div>
                    <h1 className="main-title">ABOUT ME</h1>

                    <div className="main-description">
                        <p>
                            I am a Software Developer based in Kolkata, specializing in backend architecture. I leverage <strong>Go</strong> and <strong>Java</strong> to engineer high-performance microservices, robust enterprise APIs, and scalable distributed systems.
                        </p>
                        <p>
                            In my professional experience, I take end-to-end ownership of complex applications. Whether it's architecting a secure, HIPAA-compliant telehealth platform with sub-millisecond response times or managing 500,000+ daily data transactions using <strong>Redis</strong> and <strong>PostgreSQL</strong>, my focus is on building resilient architectures. My core expertise lies in Domain-Driven Design, concurrency, asynchronous batch processing, and database query optimization.
                        </p>
                        <p>
                            Beyond writing clean and efficient code, my goal is to engineer solutions that deliver real-world impact. By integrating modern DevOps workflows with <strong>Docker</strong> and adopting AI-driven tooling, I consistently ship optimized, predictable features. I am driven by a continuous desire to tackle complex technical challenges and build the reliable foundational engines that power modern software.
                        </p>
                    </div>
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default About;
