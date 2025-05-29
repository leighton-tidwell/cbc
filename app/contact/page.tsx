'use client';

import { useState } from 'react';
import Image from 'next/image';
import ContactHeroAnimation from '@/components/ContactHeroAnimation';
import ContactFormAnimation from '@/components/ContactFormAnimation';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const mailtoLink = `mailto:officeadmin@cbcmerkel.org?subject=${encodeURIComponent(
      formData.subject || 'Contact Form Submission'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="overflow-x-hidden">
      {/* Modern Hero Section */}
      <ContactHeroAnimation>
        <section className="relative min-h-[50vh] md:min-h-[60vh] pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
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
                We&apos;d Love to Hear From You
              </span>
            </div>

            <h1 className="hero-title font-heading text-text-color mb-6">
              <span className="block text-[clamp(2rem,4vw,3rem)] font-medium uppercase tracking-[0.2em] text-gray-600 mb-2">
                Let&apos;s
              </span>
              <span className="block text-[clamp(3.5rem,10vw,7rem)] font-black leading-[0.9] tracking-[-0.03em]">
                Get <span className="text-primary italic">Connected</span>
              </span>
            </h1>

            <p className="hero-subtitle text-lg md:text-xl lg:text-2xl text-text-light max-w-3xl mx-auto leading-relaxed">
              Whether you have questions, need prayer, or want to get involved,
              we&apos;re here to help
            </p>
          </div>
        </section>
      </ContactHeroAnimation>

      <ContactFormAnimation>
        {/* Contact Information Cards */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="contact-cards grid md:grid-cols-3 gap-6 mb-16">
              {/* Phone Card */}
              <div className="contact-card group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <svg
                      className="w-8 h-8 text-primary"
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
                  <h3 className="text-xl font-heading font-bold mb-2">
                    Call Us
                  </h3>
                  <a
                    href="tel:3259285120"
                    className="block text-2xl font-bold text-primary mb-4 hover:text-primary-dark transition-colors duration-200"
                  >
                    325.928.5120
                  </a>
                  <p className="text-text-light text-sm">
                    Office Hours:
                    <br />
                    Monday - Friday
                    <br />
                    9:00 AM - 4:00 PM
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="contact-card group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                    <svg
                      className="w-8 h-8 text-blue-500"
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
                  <h3 className="text-xl font-heading font-bold mb-2">
                    Email Us
                  </h3>
                  <a
                    href="mailto:officeadmin@cbcmerkel.org"
                    className="block text-lg font-medium text-blue-500 mb-4 break-all hover:text-blue-600 transition-colors duration-200"
                  >
                    officeadmin@cbcmerkel.org
                  </a>
                  <p className="text-text-light text-sm">
                    We&apos;ll respond within
                    <br />
                    24 hours
                  </p>
                </div>
              </div>

              {/* Location Card */}
              <div className="contact-card group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors duration-300">
                    <svg
                      className="w-8 h-8 text-green-500"
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
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    Visit Us
                  </h3>
                  <a
                    href="https://maps.google.com/?q=506+Runnels+St,+Merkel,+TX+79536"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-lg font-medium text-green-500 mb-4 hover:text-green-600 transition-colors duration-200"
                  >
                    506 Runnels St
                    <br />
                    Merkel, TX 79536
                  </a>
                  <p className="text-text-light text-sm">
                    Sunday Service: 10:00 AM
                    <br />
                    Wednesday: 7:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="form-section grid lg:grid-cols-2 gap-12 items-start">
              {/* Form */}
              <div className="contact-form bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
                  Send Us a Message
                </h2>
                <p className="text-text-light mb-8">
                  Fill out the form below and we&apos;ll get back to you as soon
                  as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Prayer Request">Prayer Request</option>
                        <option value="Get Involved">Get Involved</option>
                        <option value="First Time Visitor">
                          First Time Visitor
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 resize-none"
                      placeholder="Tell us how we can help..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 group"
                  >
                    Send Message
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </form>
              </div>

              {/* Map/Image Section */}
              <div className="map-section relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/location.jpg"
                  alt="Church Interior"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-heading font-bold mb-4">
                    Find Your Way Here
                  </h3>
                  <p className="mb-6 text-white/90">
                    We&apos;re located in the heart of Merkel, Texas. Our
                    building is wheelchair accessible with plenty of parking
                    available.
                  </p>
                  <a
                    href="https://maps.google.com/?q=506+Runnels+St,+Merkel,+TX+79536"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300 border border-white/20"
                  >
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
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>

          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-color mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-text-light">
                Quick answers to common questions
              </p>
            </div>

            <div className="faq-grid space-y-6">
              <div className="faq-item bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 flex items-start gap-3">
                  <span className="text-primary text-2xl">Q:</span>
                  What should I expect on my first visit?
                </h3>
                <p className="text-text-light pl-9">
                  You&apos;ll be warmly welcomed! Our services are casual and
                  friendly. Worship starts at 10:00 AM on Sundays. We have
                  programs for all ages, and you&apos;re invited to stay for
                  fellowship after the service.
                </p>
              </div>

              <div className="faq-item bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 flex items-start gap-3">
                  <span className="text-primary text-2xl">Q:</span>
                  Is there parking available?
                </h3>
                <p className="text-text-light pl-9">
                  Yes! We have ample parking available in our main lot. Handicap
                  accessible parking is available near the main entrance.
                </p>
              </div>

              <div className="faq-item bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 flex items-start gap-3">
                  <span className="text-primary text-2xl">Q:</span>
                  What programs do you offer for children?
                </h3>
                <p className="text-text-light pl-9">
                  We have Children&apos;s Church for ages 3-12 during Sunday
                  services, youth programs on Wednesday evenings, and special
                  events throughout the year designed specifically for families
                  and children.
                </p>
              </div>

              <div className="faq-item bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 flex items-start gap-3">
                  <span className="text-primary text-2xl">Q:</span>
                  How can I get involved?
                </h3>
                <p className="text-text-light pl-9">
                  We&apos;d love to have you join us! Start by attending a
                  service, then explore our various ministries, small groups,
                  and volunteer opportunities. Our staff is happy to help you
                  find the perfect fit.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ContactFormAnimation>
    </main>
  );
}
