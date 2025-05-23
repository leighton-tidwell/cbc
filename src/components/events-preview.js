export const createEventsPreview = () => {
  return `
    <section class="section">
      <div class="container">
        <h2 class="section-title">Upcoming Events</h2>
        <div class="events-preview">
          <div class="event-cards">
            <div class="event-card">
              <img src="/images/stock/vince-fleming-gssVHlGhisQ-unsplash.jpg" alt="Sunday Service" class="event-image">
              <div class="event-content">
                <h3 class="event-title">Sunday Morning Service</h3>
                <p class="event-date">Sundays at 10:00 AM</p>
                <p class="event-description">Join us for worship, prayer, and a message from Pastor Colton Grisham.</p>
                <a href="#" class="btn" data-page="events">Learn More</a>
              </div>
            </div>
            <div class="event-card">
              <img src="/images/stock/megan-allen-fx81JSLfyLU-unsplash.jpg" alt="Wednesday Service" class="event-image">
              <div class="event-content">
                <h3 class="event-title">Wednesday Night Service</h3>
                <p class="event-date">Wednesdays at 7:00 PM</p>
                <p class="event-description">Join us on Wednesday nights for that midweek refuel with classes for every age.</p>
                <a href="#" class="btn" data-page="events">Learn More</a>
              </div>
            </div>
            <div class="event-card">
              <img src="/images/stock/nathan-mullet-pmiW630yDPE-unsplash.jpg" alt="Sunday School" class="event-image">
              <div class="event-content">
                <h3 class="event-title">Sunday School</h3>
                <p class="event-date">Sundays at 9:00 AM</p>
                <p class="event-description">Classes available for all ages including Adult, Young Adult, and Children's Church.</p>
                <a href="#" class="btn" data-page="events">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};
