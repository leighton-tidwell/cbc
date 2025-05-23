import { createStaffCard, createStaffPlaceholder } from './staff-card.js';

const staffData = {
  leadership: [
    { name: 'Colton Grisham', position: 'Lead Pastor' },
    { name: 'Dusty Grun', position: 'Associate Pastor' },
    { name: 'Bo Martin', position: 'Youth Leader' },
    { name: 'Cutter Grisham', position: 'Youth Leader' },
    { name: 'Jovonna Duncan', position: "Children's Church Director" },
    { name: 'Tara Martin', position: 'Administrative Assistant' }
  ],
  elders: [
    { name: 'Robert Walker', position: 'Elder' },
    { name: 'Dwayne Freeman', position: 'Elder' },
    { name: 'Larry Hewitt', position: 'Elder' },
    { name: 'Clinton McKeehan', position: 'Elder' },
    { name: 'Jimmy Don Rogers', position: 'Elder' }
  ]
};

export const createStaffSection = () => {
  const leadershipCards = staffData.leadership
    .map(person => createStaffCard(person.name, person.position, createStaffPlaceholder(person.name)))
    .join('');
    
  const elderCards = staffData.elders
    .map(person => createStaffCard(person.name, person.position, createStaffPlaceholder(person.name)))
    .join('');

  return `
    <section class="section">
      <div class="container">
        <h2 class="section-title">Our Leadership</h2>
        <p class="text-center" style="font-size: 1.125rem; opacity: 0.8; margin-bottom: var(--spacing-xl);">We are all just ordinary people serving an extraordinary God.</p>
        <div class="staff-grid">
          ${leadershipCards}
        </div>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <h2 class="section-title">Our Elders</h2>
        <div class="staff-grid">
          ${elderCards}
        </div>
      </div>
    </section>
  `;
};