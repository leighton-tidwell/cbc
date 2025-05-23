export const createServicesSection = () => {
  return `
    <section class="section" id="services">
      <div class="container">
        <h2 class="section-title">Join Us This Week</h2>
        <!--<p style="text-align: center; font-size: 1.125rem; color: var(--text-light); margin-bottom: var(--spacing-xl); max-width: 600px; margin-left: auto; margin-right: auto;">
          Experience meaningful worship and connect with our community
        </p>-->
        <div class="service-times">
          <div class="service-card">
            <img src="/images/stock/edwin-andrade-6liebVeAfrY-unsplash.jpg" alt="Sunday Service" class="service-card-image">
            <div class="service-card-content">
              <h3 class="service-day">Sunday</h3>
              <p class="service-time">10:00 AM</p>
              <p class="service-info">Worship Service<br><small>Sunday School at 9:00 AM</small></p>
            </div>
          </div>
          <div class="service-card">
            <img src="/images/stock/sam-balye-WNVnnHHcBeM-unsplash.jpg" alt="Wednesday Service" class="service-card-image">
            <div class="service-card-content">
              <h3 class="service-day">Wednesday</h3>
              <p class="service-time">7:00 PM</p>
              <p class="service-info">Midweek Service<br><small>Classes for all ages</small></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};
