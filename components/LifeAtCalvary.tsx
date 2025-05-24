import Image from 'next/image';
import LifeAtCalvaryAnimation from './LifeAtCalvaryAnimation';
import FindYourPlaceCTA from './FindYourPlaceCTA';

export default function LifeAtCalvary() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <LifeAtCalvaryAnimation>
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="life-decoration inline-flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-primary" />
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Experience More
              </span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary" />
            </div>

            <h2 className="life-title text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-text-color mb-6 tracking-[-0.02em]">
              Life at Calvary
            </h2>

            <p className="life-subtitle text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
              More than just Sunday services — we&apos;re a family united by
              faith, growing together through every season of life.
            </p>
          </div>

          {/* First Wednesday Feature - Full Width */}
          <div className="life-card mb-16 max-w-6xl mx-auto">
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="grid md:grid-cols-2 items-center">
                <div className="relative h-96 md:h-full overflow-hidden">
                  <Image
                    src="/images/stock/dnk-photo-PdXqqLO6jtw-unsplash.jpg"
                    alt="Fellowship Meal"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:hidden" />
                </div>

                <div className="p-10 lg:p-16">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="pulse-badge w-3 h-3 bg-primary rounded-full" />
                    <span className="text-primary font-bold text-sm uppercase tracking-wider">
                      First Wednesday
                    </span>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-heading font-bold text-text-color mb-4">
                    Fellowship Meal & Worship
                  </h3>

                  <p className="text-lg text-text-light mb-6 leading-relaxed">
                    Join us the first Wednesday of every month for a time of
                    fellowship, food, and worship. Share a meal with your church
                    family, followed by a powerful word from God&apos;s heart.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="font-semibold">6:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="font-semibold">Monthly</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </div>
          </div>

          {/* Wednesday Services Grid */}
          <div className="life-card grid md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
            {/* Kids Wednesday */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/stock/rosie-sun-rTwhmFSoXC8-unsplash.jpg"
                  alt="Kids Ministry"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-primary font-bold text-xs">
                    WEDNESDAYS
                  </span>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-heading font-bold text-white mb-1">
                    Kids Church
                  </h3>
                  <p className="text-white/80 text-sm">Ages 18 & Under</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-text-light mb-4">
                  Engaging, age-appropriate lessons where children discover
                  God&apos;s love through interactive teaching, worship, and
                  activities.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Every Wednesday at 7:00 PM
                </div>
              </div>
            </div>

            {/* Small Groups */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/stock/johannes-krupinski-wNjYsXOILEI-unsplash.jpg"
                  alt="Small Groups"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-primary font-bold text-xs">
                    VARIOUS TIMES
                  </span>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-heading font-bold text-white mb-1">
                    Small Groups
                  </h3>
                  <p className="text-white/80 text-sm">Connect & Grow</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-text-light mb-4">
                  Find your community in our small groups. From Bible studies to
                  life stages, there&apos;s a group where you belong.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Multiple groups available
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="life-cta text-center">
            <p className="text-lg text-text-light mb-6">
              Ready to get connected?
            </p>
            <FindYourPlaceCTA />
          </div>
        </LifeAtCalvaryAnimation>
      </div>
    </section>
  );
}
