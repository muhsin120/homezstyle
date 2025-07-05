'use client';

import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-blue-900 text-white flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Elevate Your Living with <span className="text-blue-300">HomezStyle</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Transforming interiors with modern aesthetics, quality design, and attention to detail.
          </p>
          <Link href="#services">
            <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
              Explore Our Services
            </button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-blue-50 px-5" id="about">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/images/about.jpg"
            alt="HomezStyle Interior"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-blue-900">About HomezStyle</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Homez Style and Trading Services is a dynamic company committed to transforming everyday
              spaces into elegant and functional environments. We specialize in home styling, interior décor,
              and trading of premium home furnishings and lifestyle products. With a passion for detail and
              excellence, we blend creativity with practicality to bring our clients visions to life.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h2>
            <ul className="text-lg text-gray-700 space-y-4 list-disc list-inside">
              <li>
                To deliver exceptional home styling and trading services tailored to individual preferences.
              </li>
              <li>
                To offer high-quality products that enhance the aesthetic and comfort of any living space.
              </li>
              <li>
                To build lasting relationships based on trust, integrity, and outstanding service.
              </li>
            </ul>
          </div>
          <Image
            src="/images/mission.jpg"
            alt="Our Mission"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-blue-100 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/images/renovation2.jpg"
            alt="Why Choose Us"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Choose HomezStyle?</h2>
            <ul className="text-lg text-gray-700 space-y-4 list-disc list-inside">
              <li>🎨 <strong>Creative Professionals</strong>: Experienced designers with a keen eye for detail.</li>
              <li>🛋️ <strong>Premium Product Sourcing</strong>: Access to international and local suppliers.</li>
              <li>🔧 <strong>Turnkey Solutions</strong>: From concept to completion.</li>
              <li>🤝 <strong>Customer-Centric Approach</strong>: Personalized services that reflect your unique style.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white px-6" id="services">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900">Our Services</h2>
          <p className="text-gray-600 mt-4">Innovative design, space planning, and customized solutions</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: 'Interior Style & Design', image: '/images/interiorstyle1.jpg' },
            { title: 'Home Renovation Consultation', image: '/images/renovation.jpg' },
            { title: 'Furniture & Home Accessories Trading', image: '/images/furniture.jpg' },
          ].map((service, idx) => (
            <div key={idx} className="bg-blue-100 p-6 rounded-lg shadow-md">
              <div className='relative w-full h-[15rem]'>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="rounded-md mb-4 object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-900">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Build Your Dream Space</h2>
        <p className="text-lg mb-6">
          Contact us today to bring your interior dreams to life with expert guidance and top-tier design.
        </p>
        <Link href="/contact">
          <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
            Get in Touch
          </button>
        </Link>
      </section>

      {/* Footer */}
      
    </main>
  );
};

export default HomePage;
