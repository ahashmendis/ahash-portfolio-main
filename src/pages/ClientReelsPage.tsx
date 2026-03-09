import Navbar from "../components/Navbar";
import ReelCard from "../components/ReelCard";
import "../components/styles/PortfolioSections.css";
import useScrollReveal from "../hooks/useScrollReveal";

const ClientReelsPage = () => {
  useScrollReveal();
  return (
    <main className="container-main">
      <Navbar />
      <section className="section-container portfolio-section reveal-on-scroll" style={{ paddingTop: 130 }}>
        <p className="portfolio-eyebrow">Client Reels</p>
        <h1 className="portfolio-title">Client Projects</h1>
        <p className="portfolio-subtitle">
          Video projects crafted for client brands, campaigns, and digital storytelling.
        </p>
      </section>

      <section className="section-container portfolio-section reveal-on-scroll" style={{ paddingBottom: 80 }}>
        <div className="reel-grid">
          <ReelCard
            title="Client Project Highlight"
            link="https://www.instagram.com/reel/DTX-9PJj44-/"
            description="Featured client reel with social-first campaign storytelling and cinematic delivery."
          />
        </div>
      </section>
    </main>
  );
};

export default ClientReelsPage;
