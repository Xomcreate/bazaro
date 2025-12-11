import React from 'react';

// --- Star Rating Component ---
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const stars = [];
  
  // Create 5 star icons, coloring them based on the rating
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span
        key={i}
        // Tailwind classes: text-red-600 for active (orangered), text-gray-300 for inactive
        className={i < fullStars ? 'text-red-600' : 'text-gray-300'} 
      >
        ★
      </span>
    );
  }
  return <div className="flex text-lg space-x-0.5">{stars}</div>;
};

// --- Main Review Page Component ---
function ReviewPage() {
  // --- Placeholder Data ---
  const totalReviews = 452;
  const averageRating = 4.7;
  const reviews = [
    {
      id: 1,
      user: 'Alex D.',
      rating: 5,
      title: 'Absolutely fantastic product!',
      text: 'The quality exceeded my expectations. Shipping was fast, and the design really pops. Highly recommend this to everyone looking for a robust and sleek solution.',
      date: '2025-11-28',
    },
    {
      id: 2,
      user: 'Jamie K.',
      rating: 4,
      title: 'Very good, minor suggestions.',
      text: 'A solid purchase. I wish the white background contrast was a bit sharper, but overall a great experience and easy to use.',
      date: '2025-11-20',
    },
    {
        id: 3,
        user: 'Chris P.',
        rating: 3,
        title: 'Average experience.',
        text: 'It was okay. The orangered button is easy to see, but the product itself was just what I expected, nothing more. Delivery was standard.',
        date: '2025-11-15',
      },
      {
        id: 4,
        user: 'Sarah M.',
        rating: 5,
        title: 'Love the high-contrast look!',
        text: 'The black, white, and orangered palette is stunning. Functionality is top-notch. I use this every day!',
        date: '2025-11-10',
      },
  ];
  // --- End Placeholder Data ---

  return (
    // Main container: White background, black text, centered, max width 
    <div className="max-w-6xl mx-auto p-4 md:p-8 font-sans bg-white text-gray-900">
      
      {/* 1. Page Header / Summary Section */}
      <header className="flex flex-col md:flex-row justify-between items-center pb-6 border-b-2 border-gray-100 mb-6">
        <h1 className="text-4xl font-extrabold text-black mb-4 md:mb-0">
          Customer Reviews
        </h1>
        
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            {/* Rating Block */}
            <div className="text-center">
                <div className="flex items-center space-x-2 justify-center">
                    {/* Average rating highlighted with Orangered (red-600) */}
                    <span className="text-5xl font-bold text-red-600">
                        {averageRating}
                    </span>
                    <span className="text-xl text-gray-500">/ 5</span>
                </div>
                <StarRating rating={averageRating} />
                <p className="text-sm text-gray-600 mt-1">
                    Based on **{totalReviews}** reviews
                </p>
            </div>
            
            {/* CTA Button: Orangered background, white text */}
            <button className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md shadow-lg transition duration-200 focus:outline-none focus:ring-4 focus:ring-red-300">
                Write a Review
            </button>
        </div>
      </header>

      {/* 2. Filters and Sort Section */}
      <section className="flex flex-wrap gap-4 mt-6 mb-10 justify-start items-center">
        {/* Sort Dropdown */}
        <div className="flex items-center space-x-2">
          <label htmlFor="sort-by" className="text-sm font-semibold text-gray-700">
            Sort By:
          </label>
          {/* Black border, white background for inputs */}
          <select id="sort-by" className="p-2 border border-black text-black bg-white rounded-md shadow-sm focus:ring-1 focus:ring-red-600 focus:border-red-600">
            <option>Most Recent</option>
            <option>Highest Rated</option>
            <option>Lowest Rated</option>
          </select>
        </div>
        
        {/* Search Input */}
        <div className="flex items-center space-x-2 ml-auto w-full md:w-auto">
            <input 
                type="text" 
                placeholder="Search reviews by keyword..." 
                className="w-full p-2 border border-black text-black bg-white rounded-md shadow-sm focus:ring-1 focus:ring-red-600 focus:border-red-600"
            />
        </div>
      </section>

      {/* 3. List of Individual Reviews */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          // Review Card: subtle gray background, hover border in orangered
          <div 
            key={review.id} 
            className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-md hover:border-red-600 hover:shadow-lg transition duration-300"
          >
            <div className="flex justify-between items-start mb-3">
              <StarRating rating={review.rating} />
              <span className="text-xs text-gray-500">{review.date}</span>
            </div>
            
            {/* Review title in Orangered */}
            <h3 className="text-xl font-extrabold mb-2 text-red-600">
                {review.title}
            </h3>
            
            <p className="text-gray-700 mb-4 line-clamp-4">
                {review.text}
            </p>
            
            {/* User name in black text */}
            <p className="text-sm font-medium italic text-right text-black">
                - {review.user}
            </p>
          </div>
        ))}
      </section>
      
      {/* Footer/Pagination Placeholder */}
      <div className="mt-10 pt-4 border-t border-gray-100 flex justify-center">
        <button className="text-red-600 hover:text-red-800 font-semibold py-2 px-4">
            Load More Reviews
        </button>
      </div>

    </div>
  );
}

export default ReviewPage;