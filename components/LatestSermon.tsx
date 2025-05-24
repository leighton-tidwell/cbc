import LatestSermonVideo from './LatestSermonVideo';
import LatestSermonAnimation from './LatestSermonAnimation';
import JoinUsSundayCTA from './JoinUsSundayCTA';

export default function LatestSermon() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-primary/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <LatestSermonAnimation>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="sermon-decoration h-[1px] w-12 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Latest Message</span>
            <div className="sermon-decoration h-[1px] w-12 bg-gradient-to-l from-transparent to-primary" />
          </div>
          
          <h2 className="sermon-title text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-text-color mb-6 tracking-[-0.02em] relative">
            Last Week's Sermon
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-[60px] h-1 bg-primary rounded-sm" />
          </h2>
          
          <p className="sermon-subtitle text-xl text-text-light max-w-3xl mx-auto">
            Catch up on the latest message from Pastor Colton Grisham
          </p>
        </div>

        {/* Video Container */}
        <div className="sermon-video max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Video Player */}
            <div className="relative aspect-video bg-gray-100">
              <LatestSermonVideo />
            </div>
            
            {/* Sermon Info */}
            <div className="sermon-info p-8 lg:p-12">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  May 17, 2025
                </span>
                <span className="text-text-light text-sm">
                  Pastor Colton Grisham
                </span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-text-color mb-8">
                Walking in Faith: Trust God's Plan
              </h3>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.facebook.com/cbcmerkel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-gray-dark transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Watch on Facebook
                </a>
                
                <JoinUsSundayCTA />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-text-light">
            Can't make it in person? Join us live on{' '}
            <a 
              href="https://www.facebook.com/cbcmerkel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Facebook
            </a>{' '}
            every Sunday at 10:00 AM
          </p>
        </div>
        </LatestSermonAnimation>
      </div>
    </section>
  );
}