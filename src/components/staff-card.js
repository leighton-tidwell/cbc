export const createStaffCard = (name, position, imagePlaceholder) => {
  return `
    <div class="staff-card">
      <img src="${imagePlaceholder}" alt="${name}" class="staff-image">
      <h3 class="staff-name">${name}</h3>
      <p class="staff-position">${position}</p>
    </div>
  `;
};

export const createStaffPlaceholder = (name) => {
  const canvas = document.createElement('canvas');
  canvas.width = 300;
  canvas.height = 300;
  const ctx = canvas.getContext('2d');

  // Light background
  ctx.fillStyle = '#f8f8f8';
  ctx.fillRect(0, 0, 300, 300);

  // Add subtle gradient overlay
  const gradient = ctx.createRadialGradient(150, 150, 0, 150, 150, 150);
  gradient.addColorStop(0, 'rgba(115, 115, 115, 0.1)');
  gradient.addColorStop(1, 'rgba(115, 115, 115, 0.2)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 300, 300);

  // Add circular background for initials
  ctx.fillStyle = '#737373';
  ctx.beginPath();
  ctx.arc(150, 150, 100, 0, 2 * Math.PI);
  ctx.fill();

  // Add text (initials)
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 56px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Get initials from name
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('');
  ctx.fillText(initials, 150, 150);

  return canvas.toDataURL('image/jpeg');
};
