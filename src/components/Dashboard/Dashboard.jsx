import './Dashboard.css';

const Dashboard = () => {
    return (
      <main className="dashboard">
      <header className="hero">
        <div className="hero-content">
          <h1>Tru Eco</h1>
          <p>Discover sustainable products that care for the planet.</p>
          <button className="shop-now-btn">Explore Now</button>
        </div>
      </header>
      <section className="features">
        <div className="feature-card">
          <h2>Sustainable Living</h2>
          <p>Shop products that minimize your ecological footprint.</p>
        </div>
        <div className="feature-card">
          <h2>Eco-Friendly Materials</h2>
          <p>Only the best, planet-conscious materials for a better tomorrow.</p>
        </div>
        <div className="feature-card">
          <h2>Support Green Initiatives</h2>
          <p>Your purchase contributes to environmental projects worldwide.</p>
        </div>
      </section>
    </main>
    );
  };
  
  export default Dashboard;