const shopData = [
  {
    id: 0,
    name: "Gourmet Goods",
    category: "Food & Drink",
    description:
      "Premium snacks, spices, beverages and African delicacies.",
    banner: "/Images/shop-food-banner.jpg",
    location: "Lagos, Nigeria",
    contact: "+234 801 223 8899",
    products: [
      { id: 101, name: "Coconut Chips", price: "₦1,500", image: "/Images/food1.jpg" },
      { id: 102, name: "Tiger Nut Drink", price: "₦900", image: "/Images/food3.jpg" },
      { id: 103, name: "Zobo Mix", price: "₦1,200", image: "/Images/food2.jpg" },
    ],
  },
  {
    id: 1,
    name: "Artisan Crafts",
    category: "Handmade",
    description: "Cultural items and art from local artisans.",
    banner: "/Images/shop-art-banner.jpg",
    location: "Port Harcourt",
    contact: "+234 801 990 2211",
    products: [
      { id: 201, name: "Wooden Sculpture", price: "₦12,000", image: "/Images/art-1.jpg" },
      { id: 202, name: "Beaded Bag", price: "₦6,000", image: "/Images/art-2.jpg" },
    ],
  },
];

export default shopData;
