import StaffSection from "@/components/StaffSection";

export default function AboutPage() {
  return (
    <main>
      {/* About Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-text-light leading-relaxed">
            Welcome to Calvary Baptist Church, where we&apos;re just ordinary people serving an extraordinary God. 
            Our mission is to spread the good news of Jesus Christ and help people grow in their faith.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-text-light mb-6 leading-relaxed">
                At Calvary Baptist Church, we are committed to spreading the good news of Jesus Christ 
                to our community and beyond. We believe in the power of God&apos;s word to transform lives 
                and bring hope to those who need it most.
              </p>
              <p className="text-lg text-text-light leading-relaxed">
                Our church exists to help people discover their purpose in Christ, develop meaningful 
                relationships, and make a difference in their communities through service and love.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">58+</div>
                <p className="text-text-light">Years of Ministry</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <p className="text-text-light">Church Family Members</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">5</div>
                <p className="text-text-light">Weekly Services</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">∞</div>
                <p className="text-text-light">Lives Touched</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs Section */}
      <section className="py-16 md:py-24 bg-bg-color">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12">
            What We Believe
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-3">The Bible</h3>
              <p className="text-text-light leading-relaxed">
                We believe the Bible is the inspired, infallible Word of God and the supreme 
                authority for faith and practice.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-3">Salvation</h3>
              <p className="text-text-light leading-relaxed">
                We believe salvation is by grace through faith in Jesus Christ alone, not by 
                works, and is available to all who believe.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-3">The Church</h3>
              <p className="text-text-light leading-relaxed">
                We believe the church is the body of Christ, composed of all believers, and 
                exists to worship God, edify believers, and evangelize the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <StaffSection />
    </main>
  );
}