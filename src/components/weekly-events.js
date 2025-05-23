const weeklyEvents = [
  {
    title: 'Adult Sunday School',
    date: 'Sundays at 9:00 AM',
    description: 'Adult Sunday School classes for all stages of life and faith.',
    image: '/src/assets/images/stock/rod-long-DRgrzQQsJDA-unsplash.jpg'
  },
  {
    title: 'Young Adult Sunday School',
    date: 'Sundays at 9:00 AM',
    description: 'Sunday School specifically designed for young adults.',
    image: '/src/assets/images/stock/dnk-photo-PdXqqLO6jtw-unsplash.jpg'
  },
  {
    title: 'Emerging Adulthood Class',
    date: 'Sundays at 9:00 AM',
    description: 'Class focused on those transitioning to adulthood.',
    image: '/src/assets/images/stock/johannes-krupinski-wNjYsXOILEI-unsplash.jpg'
  },
  {
    title: "Children's Church",
    date: 'Sundays at 9:00 AM - 11:00 AM',
    description: 'Fun and engaging Bible teachings for children.',
    image: '/src/assets/images/stock/megan-allen-fx81JSLfyLU-unsplash.jpg'
  },
  {
    title: 'Wednesday Night Service',
    date: 'Wednesdays at 7:00 PM',
    description: 'Join us for that midweek refuel with classes for every age!',
    image: '/src/assets/images/stock/vince-fleming-gssVHlGhisQ-unsplash.jpg'
  }
];

export const createWeeklyEvents = () => {
  const eventCards = weeklyEvents.map(event => `
    <div class="event-card">
      <img src="${event.image}" alt="${event.title}" class="event-image">
      <div class="event-content">
        <h3 class="event-title">${event.title}</h3>
        <p class="event-date">${event.date}</p>
        <p class="event-description">${event.description}</p>
      </div>
    </div>
  `).join('');

  return `
    <h2 class="section-title">Weekly Schedule</h2>
    <div class="event-cards">
      ${eventCards}
    </div>
  `;
};