import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-container">
        <h1>About Paradise Nursery</h1>
        
        <section className="company-intro">
          <h2>Our Story</h2>
          <p>
            Paradise Nursery was founded in 2010 with a simple mission: to bring the beauty 
            and benefits of nature into every home. What started as a small family-owned 
            greenhouse has grown into a trusted online destination for plant enthusiasts 
            across the country.
          </p>
          <p>
            We believe that everyone deserves to experience the joy of nurturing plants, 
            whether you are a seasoned gardener or just starting your green journey. Our 
            carefully curated selection includes aromatic herbs that fill your home with 
            delightful scents and medicinal plants that promote wellness and healing.
          </p>
        </section>

        <section className="company-values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <span className="value-icon">🌱</span>
              <h3>Sustainability</h3>
              <p>We use eco-friendly packaging and sustainable growing practices.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">💚</span>
              <h3>Quality</h3>
              <p>Every plant is hand-selected and health-checked before shipping.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">🤝</span>
              <h3>Community</h3>
              <p>We provide expert advice and support for your plant care journey.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">📚</span>
              <h3>Education</h3>
              <p>We share knowledge about plant care, benefits, and propagation.</p>
            </div>
          </div>
        </section>

        <section className="company-mission">
          <h2>Our Mission</h2>
          <p>
            At Paradise Nursery, we are dedicated to enhancing lives through plants. We 
            strive to make plant ownership accessible, enjoyable, and rewarding for 
            everyone. Our team of horticulturists works tirelessly to source the healthiest 
            plants and provide the guidance you need to help them thrive.
          </p>
          <p>
            Whether you are looking for aromatic plants to create a calming atmosphere, 
            medicinal plants for natural remedies, or simply want to add greenery to your 
            space, we are here to help you find the perfect plants for your needs.
          </p>
        </section>

        <section className="contact-info">
          <h2>Contact Us</h2>
          <p>
            <strong>Email:</strong> hello@paradisenursery.com
          </p>
          <p>
            <strong>Phone:</strong> (555) 123-4567
          </p>
          <p>
            <strong>Address:</strong> 123 Garden Lane, Green Valley, CA 90210
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
