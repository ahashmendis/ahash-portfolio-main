import { useMemo } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ReelCard from "../components/ReelCard";
import { brands } from "../data/portfolioData";
import "../components/styles/PortfolioSections.css";
import useScrollReveal from "../hooks/useScrollReveal";

const BrandPage = () => {
  useScrollReveal();
  const params = useParams();
  const brand = useMemo(
    () => brands.find((item) => item.slug === params.slug),
    [params.slug]
  );

  if (!brand) {
    return (
      <main className="container-main">
        <Navbar />
        <section className="section-container portfolio-section reveal-on-scroll" style={{ paddingTop: 160 }}>
          <h2 className="portfolio-title">Brand Not Found</h2>
        </section>
      </main>
    );
  }

  return (
    <main className="container-main">
      <Navbar />

      <section className="section-container portfolio-section reveal-on-scroll" style={{ paddingTop: 130 }}>
        <p className="portfolio-eyebrow">{brand.category}</p>
        {brand.longLogo ? (
          <div className="portfolio-card" style={{ padding: 18, display: "inline-flex", marginBottom: 16 }}>
            <img src={brand.longLogo} alt={`${brand.name} logo`} style={{ height: 80, objectFit: "contain" }} />
          </div>
        ) : (
          <div className="portfolio-card" style={{ padding: 18, display: "inline-flex", marginBottom: 16 }}>
            <img src={brand.shortLogo} alt={`${brand.name} logo`} style={{ height: 80, objectFit: "contain" }} />
          </div>
        )}
        <h1 className="portfolio-title" style={{ marginTop: 4 }}>{brand.name}</h1>
        <p className="portfolio-subtitle">{brand.description}</p>

        <div className="cta-actions" style={{ marginTop: 14 }}>
          {brand.instagram ? (
            <a href={brand.instagram} target="_blank" rel="noreferrer" data-cursor="disable">
              Instagram
            </a>
          ) : null}
          {brand.youtube ? (
            <a href={brand.youtube} target="_blank" rel="noreferrer" data-cursor="disable">
              YouTube
            </a>
          ) : null}
        </div>
      </section>

      <section className="section-container portfolio-section reveal-on-scroll">
        <p className="portfolio-eyebrow">Portfolio</p>
        <h2 className="portfolio-title">
          {brand.slug === "lenscape"
            ? "Video Portfolio Gallery"
            : brand.slug === "hover"
            ? "Drone Video Gallery"
            : "Projects & Portfolio"}
        </h2>
        <p className="portfolio-subtitle">
          {brand.slug === "growthscape"
            ? "Recent examples of digital growth, campaign strategy, and social performance work."
            : "Category highlights from core service delivery."}
        </p>
        <div className="skills-grid">
          {brand.portfolio.map((item) => (
            <article className="portfolio-card" key={`${brand.slug}-${item.title}`}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-container portfolio-section reveal-on-scroll">
        <p className="portfolio-eyebrow">Services</p>
        <h2 className="portfolio-title">{brand.name} Services</h2>
        <div className="skills-grid">
          {brand.services.map((service) => (
            <article className="portfolio-card" key={service}>
              <h3>{service}</h3>
            </article>
          ))}
        </div>
      </section>

      {brand.reels.length > 0 ? (
        <section className="section-container portfolio-section reveal-on-scroll" style={{ paddingBottom: 80 }}>
          <p className="portfolio-eyebrow">Instagram</p>
          <h2 className="portfolio-title">{brand.slug === "hover" ? "Drone Cinematography Reel" : "Cinematic Visual Storytelling"}</h2>
          <div className="reel-grid">
            {brand.reels.map((reel) => (
              <ReelCard
                key={`${brand.slug}-${reel.title}`}
                title={reel.title}
                link={reel.link}
                description={reel.description}
              />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
};

export default BrandPage;
