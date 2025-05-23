'use client';

interface StaffMember {
  name: string;
  position: string;
}

const staffData = {
  leadership: [
    { name: 'Colton Grisham', position: 'Lead Pastor' },
    { name: 'Dusty Grun', position: 'Associate Pastor' },
    { name: 'Bo Martin', position: 'Youth Leader' },
    { name: 'Cutter Grisham', position: 'Youth Leader' },
    { name: 'Jovonna Duncan', position: "Children's Church Director" },
    { name: 'Tara Martin', position: 'Administrative Assistant' },
  ],
  elders: [
    { name: 'Robert Walker', position: 'Elder' },
    { name: 'Dwayne Freeman', position: 'Elder' },
    { name: 'Larry Hewitt', position: 'Elder' },
    { name: 'Clinton McKeehan', position: 'Elder' },
    { name: 'Jimmy Don Rogers', position: 'Elder' },
  ],
};

function StaffCard({ name, position }: StaffMember) {
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('');

  return (
    <div className="group text-center">
      <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full bg-gray-100">
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
          <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white text-4xl font-bold">{initials}</span>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-text-light">{position}</p>
    </div>
  );
}

export default function StaffSection() {
  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
            Our Leadership
          </h2>
          <p className="text-center text-lg text-text-light mb-12 max-w-2xl mx-auto">
            We are all just ordinary people serving an extraordinary God.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {staffData.leadership.map((person) => (
              <StaffCard key={person.name} {...person} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-bg-color">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12">
            Our Elders
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {staffData.elders.map((person) => (
              <StaffCard key={person.name} {...person} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
