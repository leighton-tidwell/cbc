export const createWelcomeHome = () => {
  return `
    <section class="welcome-home">
      <!-- Slide 1: Visual Welcome -->
      <div class="welcome-slide" data-slide="1">
        <div class="welcome-container">
          <div class="welcome-visual">
            <div class="welcome-imagery">
              <img src="/images/stock/sam-balye-WNVnnHHcBeM-unsplash.jpg" alt="Church community" class="welcome-img-main">
              <img src="/images/stock/megan-allen-fx81JSLfyLU-unsplash.jpg" alt="Worship" class="welcome-img-accent">
              <img src="/images/stock/rosie-sun-rTwhmFSoXC8-unsplash.jpg" alt="Community" class="welcome-img-mobile-1">
              <img src="/images/stock/edwin-andrade-6liebVeAfrY-unsplash.jpg" alt="Fellowship" class="welcome-img-mobile-2">
            </div>
            <div class="welcome-content">
              <div class="welcome-badge">Est. 1965</div>
              <h1 class="welcome-title">
                <span class="title-line-1">Welcome</span>
                <span class="title-line-2">Home</span>
              </h1>
              <p class="welcome-subtitle">Where faith meets family</p>
            </div>
          </div>
          <div class="scroll-indicator">
            <span>Scroll to explore</span>
            <div class="scroll-arrow"></div>
          </div>
        </div>
      </div>

      <!-- Slide 2: Church Information -->
      <div class="welcome-slide" data-slide="2">
        <div class="info-container">
          <div class="info-grid">
            <div class="info-content">
              <h2 class="info-title">
                <span class="title-accent">A Place</span>
                <span class="title-main">To Belong</span>
              </h2>
              <div class="info-blocks">
                <div class="info-block" data-theme="mission">
                  <div class="block-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2v20M2 12h20" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <h3>Our Mission</h3>
                  <p>Spreading the good news of Jesus Christ to our community and helping people grow in their personal relationships with Him.</p>
                  <div class="block-accent"></div>
                </div>
                <div class="info-block" data-theme="values">
                  <div class="block-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <h3>Our Values</h3>
                  <p>We believe in being a church that makes a difference. A community that serves. A family that cares.</p>
                  <div class="block-accent"></div>
                </div>
                <div class="info-block" data-theme="join">
                  <div class="block-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <h3>Join Us</h3>
                  <p>Everyone is welcome at Calvary Baptist Church. Come as you are and experience the warmth of our church family.</p>
                  <div class="block-accent"></div>
                </div>
              </div>
            </div>
            <div class="info-visual">
              <div class="location-card">
                <div class="location-header">
                  <p class="header-subtitle">Come as you are</p>
                  <h3>Find Us</h3>
                  <div class="header-divider"></div>
                </div>
                <div class="location-content">
                  <div class="location-image-wrapper">
                    <img src="/images/location.jpg" alt="Church interior" class="location-image">
                    <div class="image-overlay">
                      <div class="overlay-content">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                        </svg>
                        <h4>506 Runnels St.</h4>
                        <p>Merkel, TX 79536</p>
                      </div>
                    </div>
                  </div>
                  <div class="map-wrapper">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3362.8977359749!2d-100.00806068481721!3d32.55584578103562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f9f5a0c5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2s506%20Runnels%20St%2C%20Merkel%2C%20TX%2079536!5e0!3m2!1sen!2sus!4v1625000000000!5m2!1sen!2sus"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                    <div class="map-actions">
                      <a href="https://goo.gl/maps/YourLocationHere" target="_blank" class="map-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M9 11H7a5 5 0 1 1 0-10h2m6 0h2a5 5 0 1 1 0 10h-2m-8-5h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};
