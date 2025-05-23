export const createHeroSection = () => {
  return `
    <section class="hero">
      <img src="/src/assets/images/location.jpg" alt="Calvary Baptist Church Interior" class="hero-img">
      <div class="container">
        <div class="hero-content">
          <img src="/src/assets/images/logo.png" alt="Calvary Baptist Church" class="hero-logo-mobile">
          <h1 class="hero-title">Welcome to Calvary Baptist Church</h1>
          <p class="hero-subtitle">Just ordinary people serving an extraordinary God!</p>
          <div class="hero-buttons">
            <a href="#services" class="btn">Join Us This Sunday</a>
            <a href="#" class="btn btn-outline" data-page="about">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  `;
};