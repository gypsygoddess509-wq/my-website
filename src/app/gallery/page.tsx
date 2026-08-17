export default function GalleryPage() {
  const sampleImages = [
    { id: 1, title: 'Portfolio 01', category: 'Editorial' },
    { id: 2, title: 'Portfolio 02', category: 'Glamour' },
    { id: 3, title: 'Portfolio 03', category: 'VIP Event' },
    { id: 4, title: 'Portfolio 04', category: 'Editorial' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Exclusive Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sampleImages.map((img) => (
          <div key={img.id} className="bg-brand-card border border-gray-800 rounded-xl overflow-hidden group shadow-lg">
            <div className="h-64 bg-gray-900 flex items-center justify-center text-gray-600 group-hover:bg-gray-800 transition">
              [ Placeholder Image ]
            </div>
            <div className="p-4 flex justify-between items-center">
              <span className="font-medium">{img.title}</span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-brand-accent/10 text-brand-accent">{img.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
