import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="landing-text">
          <h1>Welcome to Paradise Nursery</h1>
          <p className="tagline">Bring Nature Home</p>
          <p className="description">
            Discover our beautiful collection of house plants. From aromatic herbs to 
            medicinal plants, we have everything you need to create your own green paradise 
            at home. Each plant is carefully nurtured and selected to ensure it thrives in 
            your care.
          </p>
          <div className="features">
            <div className="feature">
              <span className="feature-icon">🌱</span>
              <span>Healthy Plants</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🚚</span>
              <span>Fast Delivery</span>
            </div>
            <div className="feature">
              <span className="feature-icon">💚</span>
              <span>Expert Care Tips</span>
            </div>
          </div>
          <Link to="/products" className="cta-button">
            Get Started
          </Link>
        </div>
        <div className="landing-image">
          <div className="plant-showcase">
            <span className="big-plant-icon">🪴</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
