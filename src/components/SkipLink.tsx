import { Link } from "react-router-dom";
import "./styles/SkipLink.css";

const SkipLink = () => {
  return (
    <Link to="/#main-content" className="skip-link">
      Skip to main content
    </Link>
  );
};

export default SkipLink;
