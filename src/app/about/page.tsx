'use client';

import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-blue-900 text-white flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            About <span className="text-blue-300">HomezStyle</span>
          </h1>
          <p className="mt-4 text-[0.9rem] md:text-[1rem] md:text-xl">
            Creating beautiful, functional spaces that reflect your lifestyle.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Story</h2>
            <p className="text-[1rem] text-gray-700 leading-relaxed">
              Founded with a vision to redefine interior spaces, Homez Style and Trading Services combines passion,
              creativity, and professionalism to deliver exceptional results. Our journey started with a simple idea—
              to bring elegance, function, and personality into every corner of your home or workspace.
              Over the years, we’ve grown into a trusted name, offering a range of styling, renovation, and
              premium product trading services.
            </p>
          </div>
          <Image
            src="/images/story.jpg"
            alt="Our Story"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/images/renovation2.jpg"
            alt="Our Values"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Values</h2>
            <ul className="text-lg text-gray-700 space-y-4 list-disc list-inside">
              <li><strong>Creativity:</strong> Fresh ideas tailored to each client.</li>
              <li><strong>Integrity:</strong> Honest, transparent communication in every project.</li>
              <li><strong>Quality:</strong> Commitment to excellence from materials to execution.</li>
              <li><strong>Collaboration:</strong> Building strong relationships with our clients.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Meet Our Team</h2>
          <p className="text-[1rem] text-gray-700 mb-8">
            A blend of interior designers, project managers, and stylists—all united by a shared passion for spaces that inspire.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Aisha Rahman', role: 'Creative Director', image: '/images/team1.jpg' },
              { name: 'Mohammed Ali', role: 'Senior Interior Designer', image: '/images/team2.jpg' },
              { name: 'Naufal Thekke Purayil Kuthirammal', role: 'Sales Supervisor', image: '/images/team3.jpg' },
            ].map((member, idx) => (
              <div key={idx} className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold text-blue-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client-Centric Focus */}
      <section className="py-16 px-6 bg-blue-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Client-Centric Approach</h2>
          <p className="text-[1rem] text-gray-700">
            Every project begins with your story. We listen, understand, and translate your dreams into a reality that’s both functional and beautiful. From concept to completion, we’re by your side.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
