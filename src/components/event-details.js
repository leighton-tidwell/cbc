export const createEventDetails = (title, date, description, image, additionalInfo = '') => {
  return `
    <div class="event-details">
      <div>
        <img src="${image}" alt="${title}" class="event-details-image">
      </div>
      <div class="event-details-content">
        <h2 class="event-details-title">${title}</h2>
        <p class="event-details-date">${date}</p>
        <p class="event-details-description">${description}</p>
        ${additionalInfo ? `<p class="event-details-description">${additionalInfo}</p>` : ''}
      </div>
    </div>
  `;
};