import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { brands, navLinks } from "../data/portfolioData";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const hasSmooth = !!document.querySelector("#smooth-wrapper");
    if (hasSmooth) {
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.7,
        speed: 1.7,
        effects: true,
        autoResize: true,
        ignoreMobileResize: true,
      });

      smoother.scrollTop(0);
    }

    const handlers: Array<{ el: HTMLAnchorElement; fn: (e: MouseEvent) => void }> = [];
    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      const clickHandler = (event: MouseEvent) => {
        const target = event.currentTarget as HTMLAnchorElement;
        const section = target.getAttribute("data-href");
        if (window.innerWidth > 1024 && hasSmooth && section?.startsWith("#") && window.location.pathname === "/") {
          event.preventDefault();
          smoother.scrollTo(section, true, "top top");
        }
        // Close mobile menu after navigation
        setIsMenuOpen(false);
      };
      element.addEventListener("click", clickHandler);
      handlers.push({ el: element, fn: clickHandler });
    });

    const resizeHandler = () => {
      ScrollSmoother.refresh(true);
      // Close menu on desktop resize
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      handlers.forEach(({ el, fn }) => el.removeEventListener("click", fn));
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          AHASH MENDIS
        </a>
        
        {/* Desktop Navigation */}
        <ul className="navbar-nav navbar-nav-desktop">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.external ? (
                <a href={link.href} target="_blank" rel="noreferrer" aria-label={`${link.label} - opens in new tab`}>
                  <HoverLinks text={link.label.toUpperCase()} />
                </a>
              ) : (
                <Link
                  data-href={link.href.startsWith("/#") ? link.href.slice(1) : undefined}
                  to={link.href}
                  aria-label={link.label}
                >
                  <HoverLinks text={link.label.toUpperCase()} />
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="navbar-right">
          <a
            href="https://wa.me/94701987004"
            className="navbar-connect"
            data-cursor="disable"
            aria-label="Send message via WhatsApp"
          >
            Message
          </a>

          {/* Brand Logos - Desktop Only */}
          <div className="navbar-brand-logos navbar-brand-logos-desktop">
            {brands.map((brand) => (
              <Link 
                key={brand.slug} 
                to={brand.route} 
                className="navbar-brand-logo" 
                data-cursor="disable"
                aria-label={`${brand.name} - visit brand page`}
              >
                <img src={brand.shortLogo} alt={brand.name} loading="lazy" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="navbar-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            data-cursor="disable"
          >
            {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="navbar-mobile-menu">
          <ul className="navbar-nav-mobile">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.external ? (
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.href}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          
          {/* Brand Logos - Mobile */}
          <div className="navbar-brand-logos-mobile">
            {brands.map((brand) => (
              <Link 
                key={brand.slug} 
                to={brand.route} 
                className="navbar-brand-logo-mobile"
              >
                <img src={brand.shortLogo} alt={brand.name} loading="lazy" />
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
