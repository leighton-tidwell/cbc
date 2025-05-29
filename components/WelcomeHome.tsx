import Image from 'next/image';
import WelcomeHomeAnimations from './WelcomeHomeAnimations';

// Server component for static content
export default function WelcomeHome() {
  return (
    <WelcomeHomeAnimations>
      <section className="welcome-home relative bg-white" id="welcome-home">
        {/* Slide 1: Visual Welcome */}
        <div
          className="welcome-slide min-h-screen relative overflow-hidden"
          data-slide="1"
        >
          <div className="welcome-container h-screen flex items-center justify-center px-8 lg:px-16">
            <div className="welcome-visual relative w-full max-w-[1400px] mx-auto">
              {/* Desktop Image Grid */}
              <div className="welcome-imagery hidden md:grid md:grid-cols-2 gap-8 mb-16 relative">
                <Image
                  src="/images/stock/sam-balye-WNVnnHHcBeM-unsplash.jpg"
                  alt="Church community"
                  width={600}
                  height={480}
                  className="welcome-img-main w-full h-[60vh] object-cover rounded-lg opacity-0 translate-y-[50px]"
                />
                <Image
                  src="/images/stock/megan-allen-fx81JSLfyLU-unsplash.jpg"
                  alt="Worship"
                  width={480}
                  height={320}
                  className="welcome-img-accent w-4/5 h-[40vh] object-cover rounded-lg mt-[20vh] justify-self-end opacity-0 translate-y-[50px]"
                />
              </div>

              {/* Mobile Images */}
              <div className="welcome-imagery md:hidden relative block h-screen m-0">
                <Image
                  src="/images/stock/sam-balye-WNVnnHHcBeM-unsplash.jpg"
                  alt="Church community"
                  width={300}
                  height={200}
                  className="welcome-img-main absolute w-[60%] h-[30vh] top-[10%] left-[5%] z-[1] object-cover rounded-lg opacity-0 translate-y-[50px]"
                />
                <Image
                  src="/images/stock/megan-allen-fx81JSLfyLU-unsplash.jpg"
                  alt="Worship"
                  width={250}
                  height={175}
                  className="welcome-img-accent absolute w-[50%] h-[25vh] top-[5%] right-[10%] z-[2] object-cover rounded-lg opacity-0 translate-y-[50px]"
                />
                <Image
                  src="/images/stock/rosie-sun-rTwhmFSoXC8-unsplash.jpg"
                  alt="Community"
                  width={225}
                  height={175}
                  className="welcome-img-mobile-1 absolute w-[45%] h-[25vh] bottom-[15%] right-[5%] z-[1] object-cover rounded-lg opacity-0 translate-y-[50px]"
                />
                <Image
                  src="/images/stock/edwin-andrade-6liebVeAfrY-unsplash.jpg"
                  alt="Fellowship"
                  width={275}
                  height={196}
                  className="welcome-img-mobile-2 absolute w-[55%] h-[28vh] bottom-[5%] left-[10%] z-[2] object-cover rounded-lg opacity-0 translate-y-[50px]"
                />
              </div>

              {/* Welcome Content */}
              <div className="welcome-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 bg-white/95 px-8 py-16 md:px-16 md:py-16 rounded-lg backdrop-blur-[10px] shadow-lg w-[85%] max-w-[350px] md:w-auto md:max-w-none">
                <div className="welcome-badge inline-block px-4 py-2 md:px-6 md:py-2 bg-gray-100 rounded-full text-sm md:text-sm font-medium text-gray-700 mb-6 md:mb-8 opacity-0 translate-y-[20px]">
                  Est. 1965
                </div>
                <h1 className="welcome-title font-heading text-[clamp(2.5rem,10vw,3.5rem)] md:text-[clamp(4rem,10vw,8rem)] leading-[0.9] text-gray-900 mb-4">
                  <span className="title-line-1 block opacity-0 translate-y-[50px]">
                    Welcome
                  </span>
                  <span className="title-line-2 block italic text-primary opacity-0 translate-y-[50px]">
                    Home
                  </span>
                </h1>
                <p className="welcome-subtitle text-base md:text-2xl text-gray-600 opacity-0 translate-y-[30px]">
                  Where faith meets family
                </p>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator hidden md:block absolute bottom-8 md:bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 z-20">
              <span className="block text-sm text-gray-600 mb-2">
                Scroll to explore
              </span>
              <div className="scroll-arrow w-[30px] h-[30px] mx-auto border-r-2 border-b-2 border-gray-600"></div>
            </div>
          </div>
        </div>

        {/* Slide 2: Church Information */}
        <div className="welcome-slide" data-slide="2" id="location-section">
          <div className="info-container min-h-screen px-4 py-16 md:px-16 md:py-32 flex items-center">
            <div className="info-grid grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32 max-w-[1400px] mx-auto w-full">
              {/* Info Content */}
              <div className="info-content order-1 lg:order-1">
                <h2 className="info-title font-heading text-[clamp(2rem,8vw,3rem)] lg:text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] mb-8 lg:mb-16 text-center lg:text-left">
                  <span className="title-accent block text-[0.75em] lg:text-[0.7em] text-gray-600 font-normal mb-1 lg:mb-0 opacity-0 -translate-x-[50px]">
                    A Place
                  </span>
                  <span className="title-main block text-gray-900 opacity-0 -translate-x-[50px]">
                    To Belong
                  </span>
                </h2>
                <div className="info-blocks flex flex-col gap-4 lg:gap-6">
                  <div
                    className="info-block relative p-4 lg:p-8 bg-white rounded-lg opacity-0 translate-y-[30px] overflow-hidden border border-gray-200 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:border-transparent"
                    data-theme="mission"
                  >
                    <div className="block-icon w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-md mb-2 lg:mb-4 bg-gray-100 text-primary transition-all duration-300 ease-out">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 2v20M2 12h20"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg lg:text-xl mb-2 text-gray-900 font-semibold">
                      Our Mission
                    </h3>
                    <p className="text-gray-600 leading-[1.7] text-sm lg:text-[0.95rem]">
                      Spreading the good news of Jesus Christ to our community
                      and helping people grow in their personal relationships
                      with Him.
                    </p>
                    {/* Decorative element - Concentric circles */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 opacity-[0.08]">
                      <div className="absolute inset-0 rounded-full border-2 border-primary"></div>
                      <div className="absolute inset-3 rounded-full border-2 border-primary/60"></div>
                      <div className="absolute inset-6 rounded-full bg-primary/30"></div>
                    </div>
                  </div>

                  <div
                    className="info-block relative p-4 lg:p-8 bg-white rounded-lg opacity-0 translate-y-[30px] overflow-hidden border border-gray-200 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:border-transparent"
                    data-theme="values"
                  >
                    <div className="block-icon w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-md mb-2 lg:mb-4 bg-red-50 text-red-400 transition-all duration-300 ease-out">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg lg:text-xl mb-2 text-gray-900 font-semibold">
                      Our Values
                    </h3>
                    <p className="text-gray-600 leading-[1.7] text-sm lg:text-[0.95rem]">
                      We believe in being a church that makes a difference. A
                      community that serves. A family that cares.
                    </p>
                    {/* Decorative element - Cross pattern */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 opacity-[0.06]">
                      <div className="absolute top-1/2 left-0 right-0 h-2 bg-red-400 -translate-y-1/2"></div>
                      <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-red-400 -translate-x-1/2"></div>
                      <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-red-400/40 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  </div>

                  <div
                    className="info-block relative p-4 lg:p-8 bg-white rounded-lg opacity-0 translate-y-[30px] overflow-hidden border border-gray-200 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:border-transparent"
                    data-theme="join"
                  >
                    <div className="block-icon w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-md mb-2 lg:mb-4 bg-green-50 text-green-500 transition-all duration-300 ease-out">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="9"
                          cy="7"
                          r="4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M23 21v-2a4 4 0 0 0-3-3.87"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 3.13a4 4 0 0 1 0 7.75"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg lg:text-xl mb-2 text-gray-900 font-semibold">
                      Join Us
                    </h3>
                    <p className="text-gray-600 leading-[1.7] text-sm lg:text-[0.95rem]">
                      Everyone is welcome at Calvary Baptist Church. Come as you
                      are and experience the warmth of our church family.
                    </p>
                    {/* Decorative element - Overlapping hexagons */}
                    <div className="absolute -top-5 -right-5 w-24 h-24 opacity-[0.07]">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path
                          d="M30 10 L50 10 L60 27 L50 44 L30 44 L20 27 Z"
                          fill="none"
                          stroke="rgb(34,197,94)"
                          strokeWidth="2"
                        />
                        <path
                          d="M50 20 L70 20 L80 37 L70 54 L50 54 L40 37 Z"
                          fill="rgb(34,197,94)"
                          fillOpacity="0.3"
                        />
                        <path
                          d="M40 30 L60 30 L70 47 L60 64 L40 64 L30 47 Z"
                          fill="none"
                          stroke="rgb(34,197,94)"
                          strokeWidth="1.5"
                          strokeDasharray="2,2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="info-visual flex items-center justify-center order-2 lg:order-2 mt-8 lg:mt-0">
                <div
                  id="find-us"
                  className="location-card bg-white rounded-lg overflow-hidden shadow-lg lg:shadow-xl opacity-0 translate-y-[30px] w-full"
                >
                  <div className="location-header p-6 lg:p-16 bg-white text-center border-b border-gray-200">
                    <p className="header-subtitle text-xs lg:text-sm text-primary uppercase tracking-wider mb-2 font-medium">
                      Come as you are
                    </p>
                    <h3 className="font-heading text-2xl lg:text-[2.5rem] mb-4 text-gray-900 font-normal">
                      Find Us
                    </h3>
                    <div className="header-divider w-[60px] h-[3px] bg-primary mx-auto rounded-sm"></div>
                  </div>
                  <div className="location-content grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[400px]">
                    <div className="location-image-wrapper relative overflow-hidden h-[200px] lg:h-full">
                      <Image
                        src="/images/location.jpg"
                        alt="Church interior"
                        fill
                        className="location-image object-cover transition-transform duration-300 ease-out hover:scale-105"
                      />
                      <div className="image-overlay absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 lg:p-8 text-white transition-all duration-300 ease-out hover:from-black/90 hover:to-black/10">
                        <div className="overlay-content text-center w-full">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="mx-auto mb-4 opacity-90"
                          >
                            <path
                              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                              fill="currentColor"
                            />
                          </svg>
                          <h4 className="text-lg lg:text-xl mb-1 font-semibold">
                            506 Runnels St.
                          </h4>
                          <p className="text-sm lg:text-[0.95rem] opacity-90">
                            Merkel, TX 79536
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="map-wrapper relative flex flex-col h-[250px] lg:h-full">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3362.8977359749!2d-100.00806068481721!3d32.55584578103562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f9f5a0c5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2s506%20Runnels%20St%2C%20Merkel%2C%20TX%2079536!5e0!3m2!1sen!2sus!4v1625000000000!5m2!1sen!2sus"
                        className="w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                      <div className="map-actions absolute bottom-4 lg:bottom-8 right-4 lg:right-8">
                        <a
                          href="https://goo.gl/maps/YourLocationHere"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="map-btn inline-flex items-center gap-2 px-3 py-2 lg:px-6 lg:py-3 bg-white text-gray-900 rounded-md text-xs lg:text-sm font-medium shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M9 11H7a5 5 0 1 1 0-10h2m6 0h2a5 5 0 1 1 0 10h-2m-8-5h10"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                          Get Directions
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WelcomeHomeAnimations>
  );
}
