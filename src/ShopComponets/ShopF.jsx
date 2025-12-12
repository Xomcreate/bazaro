import React, { useState } from "react";

const COLOR_ORANGERED = "#FF4500";
const COLOR_BLACK = "#1F2937";

// Example reviews data
const initialReviews = [
  {
    name: "Chioma A.",
    rating: 5,
    comment: "Great seller! Fast shipping and the product was exactly as described.",
    photo: "https://via.placeholder.com/60",
  },
  {
    name: "Emeka O.",
    rating: 4,
    comment: "Item arrived in good condition. Would recommend.",
    photo: null,
  },
  {
    name: "Amaka U.",
    rating: 5,
    comment: "Excellent communication. Very satisfied with my purchase!",
    photo: "https://via.placeholder.com/60",
  },
  {
    name: "Tunde K.",
    rating: 3,
    comment: "Product was okay, delivery took a bit longer than expected.",
    photo: null,
  },
];

function renderStars(rating) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={`text-${i <= rating ? "yellow-400" : "gray-300"} text-lg`}
      >
        ★
      </span>
    );
  }
  return stars;
}

export default function ShopF() {
  const [reviews, setReviews] = useState(initialReviews);
  const [formData, setFormData] = useState({
    name: "",
    rating: 0,
    comment: "",
    photo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (value) => {
    setFormData({ ...formData, rating: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.comment || formData.rating === 0) {
      alert("Please fill in your name, comment, and rating.");
      return;
    }
    setReviews([formData, ...reviews]);
    setFormData({ name: "", rating: 0, comment: "", photo: "" });
  };

  return (
    <div className="w-full bg-gray-50 py-16" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="max-w-5xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-3" style={{ color: COLOR_BLACK }}>
            Customer Reviews
          </h2>
          <p className="text-gray-600 text-lg">
            See what our buyers are saying about this seller and their products.
          </p>
        </div>

        {/* REVIEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md space-y-4 text-center">
              <div className="flex flex-col items-center gap-4">
                {review.photo ? (
                  <img
                    src={review.photo}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-bold">
                    {review.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="font-semibold" style={{ color: COLOR_BLACK }}>
                    {review.name}
                  </h4>
                  <div className="flex justify-center">{renderStars(review.rating)}</div>
                </div>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>

        {/* REVIEW FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-md text-center">
          <h3 className="text-2xl font-bold mb-4" style={{ color: COLOR_BLACK }}>
            Write a Review
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 text-center"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Rating</label>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => handleRatingChange(num)}
                    className={`text-2xl ${num <= formData.rating ? "text-yellow-400" : "text-gray-300"} transition`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block mb-1 font-semibold">Comment</label>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 text-center"
                placeholder="Write your review here..."
                rows={4}
                required
              ></textarea>
            </div>

            <div>
              <label className="block mb-1 font-semibold">Photo URL (Optional)</label>
              <input
                type="text"
                name="photo"
                value={formData.photo}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 text-center"
                placeholder="Link to your photo"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 font-semibold rounded-xl shadow-md transition hover:scale-105"
              style={{ backgroundColor: COLOR_ORANGERED, color: "white" }}
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
