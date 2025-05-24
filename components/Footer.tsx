import Link from 'next/link';
import Image from 'next/image';
import FooterJoinUsLink from './FooterJoinUsLink';
import FooterWatermark from './FooterWatermark';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Watermark Pattern */}
      <FooterWatermark />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Section - Spans 5 columns */}
            <div className="lg:col-span-5">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/images/logo.png"
                  alt="Calvary Baptist Church"
                  width={180}
                  height={60}
                  className="h-12 w-auto brightness-0 invert opacity-90"
                />
              </Link>
              <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
                Just ordinary people serving an extraordinary God!
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/cbcmerkel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5 text-white/70 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* YouTube - Commented out for future use */}
                {/* <a
                  href="https://www.youtube.com/channel/YOUR_CHANNEL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a> */}
              </div>
            </div>

            {/* Quick Links - Spans 2 columns */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
                Quick Links
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <FooterJoinUsLink />
                </li>
              </ul>
            </div>

            {/* Service Times - Spans 2 columns */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
                Service Times
              </h3>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <div className="font-medium text-white/90">Sunday</div>
                  <div className="text-sm">9:00 AM - Sunday School</div>
                  <div className="text-sm">10:00 AM - Worship</div>
                </li>
                <li>
                  <div className="font-medium text-white/90">Wednesday</div>
                  <div className="text-sm">7:00 PM - Service</div>
                </li>
              </ul>
            </div>

            {/* Contact - Spans 3 columns */}
            <div className="lg:col-span-3">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
                Get in Touch
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
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
                  <div className="text-gray-400">
                    <div>506 Runnels St.</div>
                    <div>Merkel, TX 79536</div>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0"
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
                  <a
                    href="tel:325-928-5120"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    (325) 928-5120
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0"
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
                  <a
                    href="mailto:officeadmin@cbcmerkel.org"
                    className="text-gray-400 hover:text-white transition-colors break-all"
                  >
                    officeadmin@cbcmerkel.org
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © {currentYear} Calvary Baptist Church, Merkel TX. All rights
                reserved.
              </p>
              <p className="text-gray-500 text-sm">
                Ordinary people • Extraordinary God
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
