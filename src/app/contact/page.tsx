export default function ReviewsPage() {
  const reviews = [
    { id: 1, client: 'VIP Client A', text: 'Absolute professional. Punctual, engaging, and wonderful company.', rating: 5 },
    { id: 2, client: 'Event Organizer B', text: 'Hired for a private corporate VIP event. Seamless coordination and fantastic etiquette.', rating: 5 },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Client Reviews & Testimonials</h1>
      <div className="space-y-6">
        {reviews.map(r => (
          <div key={r.id} className="bg-brand-card border border-gray-800 p-6 rounded-2xl">
            <div className="flex justify-between items-center mb-3">
              <span className="font-semibold text-gray-200">{r.client}</span>
              <span className="text-brand-gold">{'★'.repeat(r.rating)}</span>
            </div>
            <p className="text-gray-400 text-sm">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
