import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder</h4>
                <h5>Lenscape Studios</h5>
              </div>
              <h3>Ongoing</h3>
            </div>
            <p>
              Built a cinematic video production brand focused on
              storytelling-driven visuals including weddings, events, and brand
              films.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder</h4>
                <h5>Hover by Ahash</h5>
              </div>
              <h3>Ongoing</h3>
            </div>
            <p>
              Expanded into professional aerial cinematography covering
              landscapes, events, and real estate-focused drone visuals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder</h4>
                <h5>Nexscape & Growthscape</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building technology and digital growth ventures across product
              development, social strategy, and campaign-driven brand expansion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
