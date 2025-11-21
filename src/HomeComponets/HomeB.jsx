import React, { useRef } from 'react';

// --- Category Tiles Data (Expanded and with Image Placeholders) ---
const categoryTiles = [
  {
    title: 'Electronics',
    subtitle: 'Smart Devices',
    description: 'Phones, Laptops, TVs',
    bgColor: 'bg-indigo-600',
    textColor: 'text-white',
    link: '/categories/electronics',
    imageAlt: 'Category for Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1760520338238-4137dd2dc28f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNtYXJ0JTIwZGV2aWNlc3xlbnwwfHwwfHx8MA%3D%3D' // Placeholder image
  },
  {
    title: 'Fashion',
    subtitle: 'Latest Trends',
    description: 'Apparel & Accessories',
    bgColor: 'bg-pink-600',
    textColor: 'text-white',
    link: '/categories/fashion',
    imageAlt: 'Category for Fashion',
    imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D' // Placeholder image
  },
  {
    title: 'Home & Office',
    subtitle: 'Furniture & Decor',
    description: 'Organize Your Space',
    bgColor: 'bg-green-500',
    textColor: 'text-gray-900',
    link: '/categories/home',
    imageAlt: 'Category for Home & Office',
    imageUrl: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D' // Placeholder image
  },
  {
    title: 'Health & Beauty',
    subtitle: 'Skincare & Wellness',
    description: 'Self-Care Essentials',
    bgColor: 'bg-red-500',
    textColor: 'text-white',
    link: '/categories/beauty',
    imageAlt: 'Category for Health & Beauty',
    imageUrl: 'https://media.istockphoto.com/id/2196084933/photo/young-woman-applying-facial-serum-in-a-modern-bathroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=d2njFh9cEU0KWXywOQ57nn7sAGtyHFdDAeDXLnaF084=' // Placeholder image
  },
  {
    title: 'Sporting Goods',
    subtitle: 'Gear & Equipment',
    description: 'Get Active Outdoors',
    bgColor: 'bg-yellow-600',
    textColor: 'text-gray-900',
    link: '/categories/sports',
    imageAlt: 'Category for Sporting Goods',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGd5bXxlbnwwfHwwfHx8MA%3D%3D' // Placeholder image
  },
  {
    title: 'Automotive',
    subtitle: 'Parts & Tools',
    description: 'Car Maintenance',
    bgColor: 'bg-gray-800',
    textColor: 'text-yellow-400',
    link: '/categories/automotive',
    imageAlt: 'Category for Automotive',
    imageUrl: 'https://media.istockphoto.com/id/2205376620/photo/a-lot-of-cars-in-a-rows-used-car-sales.webp?a=1&b=1&s=612x612&w=0&k=20&c=qe_h_QK8gSPUlJM59kkYt08fQ67KpBuTfZZZFmxvWnw=' // Placeholder image
  },
  {
    title: 'Kids & Toys',
    subtitle: 'Games & Learning',
    description: 'Fun for the Family',
    bgColor: 'bg-cyan-500',
    textColor: 'text-gray-900',
    link: '/categories/toys',
    imageAlt: 'Category for Kids & Toys',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1702830269669-17de421dfdf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lkcyUyNnRveXN8ZW58MHx8MHx8fDA%3D' // Placeholder image
  },
  {
    title: 'Groceries',
    subtitle: 'Food & Household',
    description: 'Daily Necessities',
    bgColor: 'bg-lime-700',
    textColor: 'text-white',
    link: '/categories/groceries',
    imageAlt: 'Category for Groceries',
    imageUrl: 'https://media.istockphoto.com/id/617759204/photo/steakhouse-double-bacon-cheeseburger.webp?a=1&b=1&s=612x612&w=0&k=20&c=ClO9FRiWvSfMothhoVfcdcB7CUsUPWSa-0wf38U7h3E=' // Placeholder image
  },
  { // New Category 9
    title: 'Books & Media',
    subtitle: 'Read & Watch',
    description: 'Books, Movies, Music',
    bgColor: 'bg-blue-700',
    textColor: 'text-white',
    link: '/categories/books',
    imageAlt: 'Category for Books & Media',
    imageUrl: 'https://images.unsplash.com/photo-1604866830893-c13cafa515d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3N8ZW58MHx8MHx8fDA%3D' // Placeholder image
  },
  { // New Category 10
    title: 'Pet Supplies',
    subtitle: 'For Your Companions',
    description: 'Food, Toys, Accessories',
    bgColor: 'bg-orange-400',
    textColor: 'text-gray-900',
    link: '/categories/pets',
    imageAlt: 'Category for Pet Supplies',
    imageUrl: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D' // Placeholder image
  },
  { // New Category 11
    title: 'Art & Craft',
    subtitle: 'Unleash Creativity',
    description: 'Supplies & Hobbies',
    bgColor: 'bg-purple-700',
    textColor: 'text-white',
    link: '/categories/art-craft',
    imageAlt: 'Category for Art & Craft',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1714060722867-5772a73f1f2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFydHMlMjAlMjYlMjBjcmFmdHxlbnwwfHwwfHx8MA%3D%3D' // Placeholder image
  },
  { // New Category 12
    title: 'Garden & Outdoor',
    subtitle: 'Grow & Relax',
    description: 'Tools, Plants, Patio',
    bgColor: 'bg-emerald-600',
    textColor: 'text-white',
    link: '/categories/garden',
    imageAlt: 'Category for Garden & Outdoor',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1678836292789-6bb8d1f14a43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdhcmRlbiUyMGFuZCUyMG91dGRvb3J8ZW58MHx8MHx8fDA%3D' // Placeholder image
  },
];

const HomeB = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  const scrollRight = () => scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });

  return (
    <section className="w-full flex justify-center py-6 bg-white">
      <div className="w-[95%] md:w-[90%] relative">

        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-6 border-b-2 border-indigo-600 inline-block pb-1">
          Browse Top Categories ✨
        </h2>

        {/* Scrollable Category Tiles */}
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto p-2"
          style={{
            scrollBehavior: 'smooth',
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE 10+
          }}
        >
          {categoryTiles.map((tile, index) => (
            <a
              key={index}
              href={tile.link}
              className="shrink-0 w-40 sm:w-48 h-48 rounded-lg shadow-lg overflow-hidden relative transition-transform duration-300 transform hover:scale-[1.05] hover:shadow-xl group" // Added group for hover effects
              aria-label={tile.description}
            >
              {/* Image Area */}
              <div className="w-full h-3/5 overflow-hidden"> {/* Adjusted height for image */}
                <img
                  src={tile.imageUrl}
                  alt={tile.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Text Content Area */}
              <div className={`w-full h-2/5 ${tile.bgColor} flex flex-col justify-center items-center text-center p-2 pt-0`}> {/* Adjusted height and padding */}
                {tile.subtitle && <p className={`text-xs sm:text-sm font-semibold ${tile.textColor}`}>{tile.subtitle}</p>}
                <h3 className={`text-sm sm:text-md font-bold leading-tight ${tile.textColor}`}>{tile.title}</h3>
              </div>

              {/* Bottom Description Bar - Moved into the colored area or removed if not needed with images */}
              {/* I've removed the separate white bar for simplicity and integrated the description into the colored block.
                  If you want the white bar back, let me know and I'll adjust. */}
              {/* <div className="absolute bottom-0 left-0 right-0 bg-white text-center py-1 border-t border-gray-200">
                <p className="text-xs font-medium text-gray-700">{tile.description}</p>
              </div> */}
            </a>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10 hidden sm:block"
          onClick={scrollLeft}
          aria-label="Scroll left"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </button>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10 hidden sm:block"
          onClick={scrollRight}
          aria-label="Scroll right"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </section>
  );
};

export default HomeB;

/* Optional: hide scrollbar for Webkit browsers */
<style>
{`
  .flex::-webkit-scrollbar {
    display: none;
  }
`}
</style>