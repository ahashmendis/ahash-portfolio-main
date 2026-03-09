import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { brands, navLinks } from "../data/portfolioData";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
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
      };
      element.addEventListener("click", clickHandler);
      handlers.push({ el: element, fn: clickHandler });
    });

    const resizeHandler = () => {
      ScrollSmoother.refresh(true);
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
        <ul className="navbar-nav">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.external ? (
                <a href={link.href} target="_blank" rel="noreferrer">
                  <HoverLinks text={link.label.toUpperCase()} />
                </a>
              ) : (
                <Link
                  data-href={link.href.startsWith("/#") ? link.href.slice(1) : undefined}
                  to={link.href}
                >
                  <HoverLinks text={link.label.toUpperCase()} />
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="navbar-right">
          <a
            href="https://wa.me/94701987004"
            className="navbar-connect"
            data-cursor="disable"
          >
            Send Message
          </a>
          <div className="navbar-brand-logos">
            {brands.map((brand) => (
              <Link key={brand.slug} to={brand.route} className="navbar-brand-logo" data-cursor="disable">
                <img src={brand.shortLogo} alt={`${brand.name} logo`} loading="lazy" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
