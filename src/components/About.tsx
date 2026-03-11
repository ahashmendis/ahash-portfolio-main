import { useEffect } from "react";
import "./styles/About.css";

const About = () => {
  useEffect(() => {
    // Update meta tags for SEO when About section is rendered
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Ahash Mendis is a creative technologist specializing in digital creation, video production, brand building, and full-stack development. Specializing in Three.js, React, and innovative web experiences."
      );
    }
  }, []);

  return (
    <section className="about-section" id="about" role="region" aria-label="About Ahash Mendis">
      <article className="about-me">
        <header>
          <h2 className="title">About Me</h2>
        </header>
        <p className="para">
          <strong>Ahash Mendis</strong> is a creative technologist and multi-disciplinary digital creator
          working across technology, video production, drone cinematography, brand building, and 3D graphics.
          With expertise in <strong>React, Three.js, Node.js, and full-stack development</strong>, 
          combined with professional video production capabilities, his work seamlessly merges technical 
          excellence with cinematic storytelling to build impactful, immersive digital experiences.
        </p>
        
        <div className="expertise-highlights">
          <h3>Core Expertise</h3>
          <ul>
            <li><strong>Web Development:</strong> React, Next.js, TypeScript, Three.js, GSAP</li>
            <li><strong>Video Production:</strong> DaVinci Resolve, After Effects, cinematography</li>
            <li><strong>Brand Design:</strong> Photoshop, Lightroom, Figma, UI/UX</li>
            <li><strong>Performance & SEO:</strong> PWA, optimization, accessibility</li>
          </ul>
        </div>

        <p className="para">
          He has led creative initiatives for brands like <strong>Nexscape, Lenscape Studios, 
          Growthscape, and Hover</strong>, delivering innovative digital solutions that drive engagement 
          and brand growth.
        </p>
      </article>

      {/* Schema markup for About section */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Ahash Mendis",
          "description": "Ahash Mendis is a creative technologist specializing in digital creation, video production, brand building, and innovative web development.",
          "mainEntity": {
            "@type": "Person",
            "name": "Ahash Mendis",
            "jobTitle": "Digital Creator, Video Producer, Full-Stack Developer",
            "url": "https://ahash.me",
            "email": "hello@ahash.me",
            "image": "https://ahash.me/og-image.png",
            "knowsAbout": ["Three.js", "React", "Video Production", "Brand Design", "Web Development"]
          }
        })}
      </script>
    </section>
  );
};

export default About;
