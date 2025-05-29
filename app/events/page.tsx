'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import EventsHeroAnimation from '@/components/EventsHeroAnimation';
import EventCardsAnimation from '@/components/EventCardsAnimation';

type EventCategory = 'all' | 'weekly' | 'youth' | 'special' | 'community';

interface Event {
  id: number;
  title: string;
  date: string;
  time?: string;
  description: string;
  image: string;
  category: EventCategory;
  featured?: boolean;
  badge?: string;
}

const events: Event[] = [
  {
    id: 1,
    title: 'Sunday Morning Worship',
    date: 'Every Sunday',
    time: '10:00 AM',
    description:
      'Contemporary worship and practical teaching from Pastor Colton Grisham.',
    image: '/images/stock/vince-fleming-gssVHlGhisQ-unsplash.jpg',
    category: 'weekly',
    featured: true,
    badge: 'MAIN SERVICE',
  },
  {
    id: 2,
    title: 'Adult Sunday School',
    date: 'Every Sunday',
    time: '9:00 AM',
    description:
      'Deep Bible study and fellowship for adults at all stages of faith.',
    image: '/images/stock/rod-long-DRgrzQQsJDA-unsplash.jpg',
    category: 'weekly',
  },
  {
    id: 3,
    title: 'Young Adults Connect',
    date: 'Every Sunday',
    time: '9:00 AM',
    description: 'A dynamic space for young adults to grow in faith together.',
    image: '/images/stock/dnk-photo-PdXqqLO6jtw-unsplash.jpg',
    category: 'youth',
    badge: 'AGES 18-30',
  },
  {
    id: 4,
    title: "Children's Church",
    date: 'Every Sunday',
    time: '9:00 - 11:00 AM',
    description: 'Interactive Bible teachings designed specifically for kids.',
    image: '/images/stock/megan-allen-fx81JSLfyLU-unsplash.jpg',
    category: 'youth',
    badge: 'AGES 3-12',
  },
  {
    id: 5,
    title: 'Wednesday Night Refuel',
    date: 'Every Wednesday',
    time: '7:00 PM',
    description: 'Midweek spiritual boost with classes for all ages.',
    image: '/images/stock/edwin-andrade-6liebVeAfrY-unsplash.jpg',
    category: 'weekly',
  },
  {
    id: 6,
    title: 'Youth Group',
    date: 'Wednesdays',
    time: '7:00 PM',
    description:
      'Fun, faith, and friendship for middle and high school students.',
    image: '/images/stock/johannes-krupinski-wNjYsXOILEI-unsplash.jpg',
    category: 'youth',
    badge: 'GRADES 6-12',
  },
  {
    id: 7,
    title: 'Community Food Drive',
    date: 'First Saturday',
    time: '9:00 AM - 12:00 PM',
    description: 'Serving our neighbors with love and practical support.',
    image: '/images/stock/rosie-sun-rTwhmFSoXC8-unsplash.jpg',
    category: 'community',
    badge: 'OUTREACH',
  },
  {
    id: 8,
    title: 'Prayer & Worship Night',
    date: 'Last Friday',
    time: '7:00 PM',
    description:
      'An evening dedicated to prayer, worship, and seeking God together.',
    image: '/images/stock/nathan-mullet-S2N8hpN_vc0-unsplash.jpg',
    category: 'special',
    badge: 'MONTHLY',
  },
];

const categories = [
  { id: 'all', label: 'All Events', icon: '📅' },
  { id: 'weekly', label: 'Weekly', icon: '🗓️' },
  { id: 'youth', label: 'Youth & Kids', icon: '👦' },
  { id: 'special', label: 'Special', icon: '✨' },
  { id: 'community', label: 'Community', icon: '🤝' },
];

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState<EventCategory>('all');
  const filteredEvents =
    activeCategory === 'all'
      ? events
      : events.filter((event) => event.category === activeCategory);

  return (
    <main className="overflow-x-hidden">
      {/* Modern Hero Section */}
      <EventsHeroAnimation>
        <section className="relative min-h-[60vh] md:min-h-[70vh] pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
          {/* Dynamic Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-gray-50"></div>

            {/* Animated Orbs */}
            <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: '2s' }}
            ></div>

            {/* Geometric Pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230A4D68' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
            {/* Animated Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-md rounded-full text-primary text-sm font-medium mb-8 border border-white/20 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="font-semibold uppercase tracking-wider">
                Life Happens Here
              </span>
            </div>

            <h1 className="hero-title font-heading text-text-color mb-6">
              <span className="block text-[clamp(2rem,4vw,3rem)] font-medium uppercase tracking-[0.2em] text-gray-600 mb-2">
                Experience
              </span>
              <span className="block text-[clamp(3.5rem,10vw,7rem)] font-black leading-[0.9] tracking-[-0.03em]">
                Life{' '}
                <span className="text-primary italic">Together</span>
              </span>
            </h1>

            <p className="hero-subtitle text-lg md:text-xl lg:text-2xl text-text-light max-w-3xl mx-auto mb-12 leading-relaxed">
              From weekly worship to special celebrations, there&apos;s always a
              place for you at Calvary
            </p>

            {/* Quick Stats */}
            <div className="hero-stats grid grid-cols-3 gap-4 max-w-lg mx-auto">
              <div className="stat-item text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  5+
                </div>
                <div className="text-xs text-gray-600 uppercase tracking-wider">
                  Weekly Events
                </div>
              </div>
              <div className="stat-item text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  All
                </div>
                <div className="text-xs text-gray-600 uppercase tracking-wider">
                  Ages Welcome
                </div>
              </div>
              <div className="stat-item text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  Free
                </div>
                <div className="text-xs text-gray-600 uppercase tracking-wider">
                  To Attend
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 animate-bounce">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </section>
      </EventsHeroAnimation>

      {/* Featured Event Carousel */}
      <EventCardsAnimation>
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-color mb-4">
                Featured This Week
              </h2>
              <p className="text-lg text-text-light">
                Don&apos;t miss these special gatherings
              </p>
            </div>

            {/* Featured Event Card */}
            <div className="featured-event-card relative overflow-hidden rounded-2xl shadow-2xl mb-16">
              <div className="grid md:grid-cols-2 min-h-[500px]">
                <div className="relative h-[300px] md:h-full">
                  <Image
                    src={events.find((e) => e.featured)?.image || ''}
                    alt="Featured Event"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent md:bg-gradient-to-r"></div>
                </div>

                <div className="relative p-8 md:p-12 flex flex-col justify-center bg-white">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>

                  <div className="inline-flex items-center gap-2 mb-6">
                    <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider">
                      {events.find((e) => e.featured)?.badge}
                    </span>
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    {events.find((e) => e.featured)?.title}
                  </h3>

                  <div className="flex items-center gap-4 mb-6 text-gray-600">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5"
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
                      <span className="font-medium">
                        {events.find((e) => e.featured)?.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5"
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
                      <span className="font-medium">
                        {events.find((e) => e.featured)?.time}
                      </span>
                    </div>
                  </div>

                  <p className="text-lg text-text-light mb-8 leading-relaxed">
                    {events.find((e) => e.featured)?.description}
                  </p>

                  <div className="flex gap-4">
                    <Link
                      href="/#location-section"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300 hover:shadow-xl"
                    >
                      Get Directions
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </Link>
                    <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-full hover:border-primary hover:text-primary transition-all duration-300">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a9 9 0 10-13.432 0m13.432 0A9 9 0 0112 21a9 9 0 01-6.716-3.026m13.432 0c.94-1.704 1.526-3.658 1.649-5.784M6.716 17.974C5.776 16.27 5.19 14.316 5.067 12.19"
                        />
                      </svg>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-12 -mx-4 px-4 md:mx-0 md:px-0">
              <div className="flex items-start gap-3 overflow-x-auto pb-3 scrollbar-hide">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() =>
                      setActiveCategory(category.id as EventCategory)
                    }
                    className={`
                      inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm
                      whitespace-nowrap transition-all duration-300 flex-shrink-0
                      ${
                        activeCategory === category.id
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }
                    `}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span>{category.label}</span>
                    {activeCategory === category.id && (
                      <span className="ml-1 bg-white/20 px-2 py-0.5 rounded-full text-xs">
                        {filteredEvents.length}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Event Grid */}
            <div className="text-left mb-8">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">
                All Events
              </h3>
              <p className="text-gray-600">
                {filteredEvents.length}{' '}
                {filteredEvents.length === 1 ? 'event' : 'events'}
                {activeCategory !== 'all' &&
                  ` in ${categories.find((c) => c.id === activeCategory)?.label}`}
              </p>
            </div>

            <div className="event-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="event-card group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Category Badge */}
                    {event.badge && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                          {event.badge}
                        </span>
                      </div>
                    )}

                    {/* Time Badge */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
                        <p className="text-sm font-bold text-gray-900">
                          {event.time}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {event.title}
                    </h3>

                    <div className="flex items-center gap-3 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
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
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>{event.date}</span>
                      </div>
                      {event.time && (
                        <>
                          <span className="text-gray-400">•</span>
                          <div className="flex items-center gap-1">
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
                            <span>{event.time}</span>
                          </div>
                        </>
                      )}
                    </div>

                    <p className="text-gray-600 line-clamp-2 mb-4">
                      {event.description}
                    </p>

                    {/* Hover Action */}
                    <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span>Learn More</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
                  <svg
                    className="w-12 h-12 text-gray-400"
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
                </div>
                <h3 className="text-2xl font-bold mb-2">No Events Found</h3>
                <p className="text-gray-600">
                  Try selecting a different category
                </p>
              </div>
            )}
          </div>
        </section>
      </EventCardsAnimation>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Never Miss What&apos;s Happening
              </h2>
              <p className="text-lg text-text-light mb-8 leading-relaxed">
                Stay connected with our church family and be the first to know
                about upcoming events, special services, and community
                activities.
              </p>

              {/* Contact Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-xl p-6 text-left">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Call Us</p>
                      <p className="font-bold text-lg">325.928.5120</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Office hours: Mon-Fri 9am-4pm
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 text-left">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Email Us</p>
                      <p className="font-bold text-lg">
                        officeadmin@cbcmerkel.org
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    We&apos;ll respond within 24 hours
                  </p>
                </div>
              </div>

              {/* Social Follow */}
              <div className="border-t border-gray-200 pt-8">
                <p className="text-gray-600 mb-4">
                  Follow us on social media for daily updates
                </p>
                <div className="flex items-center justify-center gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
