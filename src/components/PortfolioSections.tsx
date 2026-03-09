import { Link } from "react-router-dom";
import ReelCard from "./ReelCard";
import {
  brands,
  clients,
  featuredProjects,
  recentProjects,
  skillCategories,
  stats,
} from "../data/portfolioData";
import AnimatedNumber from "./AnimatedNumber";
import "./styles/PortfolioSections.css";

const categories = [
  { title: "Web Development", href: "#projects" },
  { title: "Software Development", href: "#projects" },
  { title: "Video Production", href: "#projects" },
  { title: "Drone Cinematography", href: "#projects" },
  { title: "Social Media", href: "#projects" },
  { title: "Brand Ecosystem", href: "#brands" },
];

const PortfolioSections = () => {
  return (
    <>
      <section className="portfolio-section section-container reveal-on-scroll" id="stats">
        <p className="portfolio-eyebrow">Stats</p>
        <div className="stats-grid">
          {stats.map((item) => (
            <article className="portfolio-card stat-card" key={item.label}>
              <h3>
                <AnimatedNumber value={item.value} />
              </h3>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section section-container reveal-on-scroll" id="featured-projects">
        <p className="portfolio-eyebrow">Featured</p>
        <h2 className="portfolio-title">Featured Projects</h2>
        <p className="portfolio-subtitle">
          Selected startup-style projects spanning technology, visuals, and brand growth systems.
        </p>
        <div className="feature-grid">
          {featuredProjects.map((project) => (
            <article className="portfolio-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section section-container reveal-on-scroll" id="categories">
        <p className="portfolio-eyebrow">Navigation</p>
        <h2 className="portfolio-title">Explore the Ecosystem</h2>
        <p className="portfolio-subtitle">
          Navigate through web development, software, video production, drone work, social media, and brands.
        </p>
        <div className="category-grid">
          {categories.map((item) => (
            <a key={item.title} href={item.href} className="portfolio-card category-card" data-cursor="disable">
              <h3>{item.title}</h3>
            </a>
          ))}
        </div>
      </section>

      <section className="portfolio-section section-container reveal-on-scroll" id="brands">
        <p className="portfolio-eyebrow">Brands</p>
        <h2 className="portfolio-title">Brand Ecosystem</h2>
        <p className="portfolio-subtitle">Creative and technical brands led by Ahash Mendis.</p>
        <div className="brand-grid">
          {brands.map((brand) => (
            <article className="portfolio-card brand-card" key={brand.slug}>
              <div className="brand-head">
                <div className="brand-logo-wrap">
                  <img src={brand.shortLogo} alt={`${brand.name} logo`} className="brand-logo" loading="lazy" />
                </div>
                <div>
                  <p className="brand-category">{brand.category}</p>
                  <h3>{brand.name}</h3>
                </div>
              </div>
              <p>{brand.description}</p>
              <Link to={brand.route} className="brand-link" data-cursor="disable">
                View brand page
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section section-container reveal-on-scroll" id="skills">
        <p className="portfolio-eyebrow">Skills</p>
        <h2 className="portfolio-title">Skills Dashboard</h2>
        <p className="portfolio-subtitle">
          Categorized capabilities across development, production, and digital brand building.
        </p>
        <div className="skills-grid">
          {skillCategories.map((group) => (
            <article className="portfolio-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section section-container reveal-on-scroll" id="projects">
        <p className="portfolio-eyebrow">Recent Work</p>
        <h2 className="portfolio-title">Recent Projects</h2>
        <p className="portfolio-subtitle">Reel-style previews from recent brand and client-focused production work.</p>
        <div className="reel-grid">
          {recentProjects.map((project) => (
            <ReelCard
              key={project.title}
              title={project.title}
              link={project.link}
              description={project.description}
            />
          ))}
        </div>
      </section>

      <section className="portfolio-section section-container reveal-on-scroll" id="clients">
        <p className="portfolio-eyebrow">Clients</p>
        <h2 className="portfolio-title">Trusted By Client Brands</h2>
        <p className="portfolio-subtitle">
          A selected client list across restaurants, fitness, events, property, Web3, music, and brand-focused
          creative production.
        </p>
        <div className="clients-grid">
          {clients.map((client) => (
            <article className="portfolio-card client-card" key={client.name}>
              <div className="client-logo-wrap">
                <img src={client.logo} alt={`${client.name} logo`} loading="lazy" />
              </div>
              <h3>{client.name}</h3>
              <p>{client.service}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section section-container reveal-on-scroll" id="cta">
        <article className="portfolio-card cta-card">
          <p className="portfolio-eyebrow">Call To Action</p>
          <h2 className="portfolio-title">Let&apos;s Build Something Great Together</h2>
          <p className="portfolio-subtitle">
            Open for technology work, video production, drone cinematography, and digital brand building.
          </p>
          <div className="cta-actions">
            <a href="https://wa.me/94701987004" target="_blank" rel="noreferrer" data-cursor="disable">
              Work With Me
            </a>
            <a href="#contact" data-cursor="disable">
              Contact
            </a>
          </div>
        </article>
      </section>
    </>
  );
};

export default PortfolioSections;
