import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import useScrollReveal from "../hooks/useScrollReveal";
import "../components/styles/PortfolioSections.css";

const ContactPage = () => {
  useScrollReveal();

  return (
    <main className="container-main">
      <Navbar />
      <section className="section-container portfolio-section reveal-on-scroll" style={{ paddingTop: 120 }}>
        <p className="portfolio-eyebrow">Contact</p>
        <h1 className="portfolio-title">Let&apos;s Collaborate</h1>
        <p className="portfolio-subtitle">
          Open for technology work, video production, drone cinematography, and digital brand building.
        </p>
        <div className="contact-page-grid">
          <article className="portfolio-card contact-page-card">
            <h3>Send Message</h3>
            <p>Start a direct conversation for projects and collaborations.</p>
            <div className="cta-actions">
              <a href="https://wa.me/94701987004" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </article>

          <article className="portfolio-card contact-page-card">
            <h3>Social Profiles</h3>
            <p>Connect across social channels.</p>
            <div className="contact-links-list">
              <a href="https://www.instagram.com/ahash_men" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://facebook.com/ahashmen" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://www.linkedin.com/in/ahashmendis" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://www.youtube.com/@LenscapeStudiosSL" target="_blank" rel="noreferrer">YouTube</a>
              <a href="https://medium.com/@ahashmendis" target="_blank" rel="noreferrer">Medium</a>
            </div>
          </article>
        </div>
      </section>
      <Contact />
    </main>
  );
};

export default ContactPage;
