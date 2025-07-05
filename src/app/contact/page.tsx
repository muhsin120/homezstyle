'use client';

import React, { useState } from 'react';

const ContactPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form behavior

    const { name, email, subject, message } = form;
    console.log("form:::", form)
    // Construct the mailto URL
    const body = `Name: ${name}%0DEmail: ${email}%0D%0D${message}`;
    const mailto = `mailto:info@homezstyletradingandservices.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;

    // Redirect to mailto
    window.location.href = mailto;
  };

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-blue-900 text-white flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Contact <span className="text-blue-300">HomezStyle</span>
          </h1>
          <p className="mt-4 text-[0.9rem] md:text-[1rem] md:text-xl ">
            Let’s connect and build something beautiful together.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className='text-[0.8rem] md:text-[1rem]'>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Get in Touch</h2>
            <p className="text-gray-700 mb-4">
              We’d love to hear about your project. Reach out to us using the form or contact us directly.
            </p>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:info@homezstyletradingandservices.com" className="text-blue-700 hover:underline">
                  info@homezstyletradingandservices.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{' '}
                <a href="tel:+97477152700" className="text-blue-700 hover:underline">
                  +974 7715 2700
                </a>
              </p>
              <p>
                <strong>Address:</strong><br />
                Building No: 69, Street 220<br />
                Zone 26, PO Box 7982<br />
                Doha Jadeed
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-blue-50 p-6 rounded-lg shadow-md space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us more about your project..."
                className="w-full border border-gray-300 px-4 py-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition w-full md:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
