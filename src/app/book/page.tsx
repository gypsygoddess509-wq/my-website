'use client';

import { useState } from 'react';

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2 text-center">Schedule an Appointment</h1>
      <p className="text-gray-400 text-center mb-8 text-sm">Please fill out the screening form below. All requests are subject to verification.</p>

      {submitted ? (
        <div className="bg-brand-card border border-green-500/30 p-8 rounded-2xl text-center">
          <h2 className="text-xl font-semibold text-green-400 mb-2">Request Submitted Successfully!</h2>
          <p className="text-gray-400 text-sm">You will receive a response via email or Telegram following verification screening.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-brand-card border border-gray-800 p-8 rounded-2xl space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Your Name / Alias</label>
            <input required type="text" className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-sm focus:outline-none focus:border-brand-accent" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Contact (Email or Telegram)</label>
            <input required type="text" className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-sm focus:outline-none focus:border-brand-accent" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Preferred Date</label>
              <input required type="date" className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-sm focus:outline-none focus:border-brand-accent" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Service Type</label>
              <select className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-sm focus:outline-none focus:border-brand-accent">
                <option>VIP Companion Booking</option>
                <option>Event Hosting</option>
                <option>Virtual / Custom Content</option>
              </select>
            </div>
          </div>
          <button type="submit" className="w-full bg-brand-accent text-white font-medium py-3 rounded-lg hover:opacity-90 transition">
            Submit Booking Request
          </button>
        </form>
      )}
    </div>
  );
}
