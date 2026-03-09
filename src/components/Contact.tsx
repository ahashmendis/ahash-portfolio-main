import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>WhatsApp</h4>
            <p>
              <a href="https://wa.me/94701987004" data-cursor="disable">
                Send Message
              </a>
            </p>
            <h4>Role</h4>
            <p>Digital Creator | Tech Builder | Video Producer</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/ahashmendis"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/ahash_men"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
            <a
              href="https://facebook.com/ahashmen"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Facebook <MdArrowOutward />
            </a>
            <a
              href="https://www.youtube.com/@LenscapeStudiosSL"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              YouTube <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Ahash Mendis</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
            <h5>Built with React, TypeScript, Three.js, GSAP, GLSL, CSS & Vite</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
