// Plant data for Paradise Nursery
export const plants = [
  // Aromatic Plants
  {
    id: 1,
    name: "Lavender",
    category: "Aromatic",
    description: "Beautiful fragrant purple flowers known for their calming aroma. Perfect for aromatherapy and relaxation.",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Jasmine",
    category: "Aromatic",
    description: "Sweetly scented white flowers that bloom at night. Ideal for creating a romantic atmosphere.",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1592729645009-b96d1e63ea19?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Rosemary",
    category: "Aromatic",
    description: "Aromatic herb with needle-like leaves. Great for cooking and adds a lovely scent to your home.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1594318683238-2b7d6c4b8b5c?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Mint",
    category: "Aromatic",
    description: "Refreshing fragrant herb with bright green leaves. Perfect for teas and culinary uses.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1628556270448-4d4e5a7cf2b6?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Gardenia",
    category: "Aromatic",
    description: "Elegant white flowers with a sweet, intoxicating fragrance. A classic choice for indoor gardens.",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Eucalyptus",
    category: "Aromatic",
    description: "Silvery-green leaves with a fresh, clean scent. Excellent for air purification and decoration.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1515446134809-993c501ca304?w=400&h=400&fit=crop",
  },
  // Medicinal Plants
  {
    id: 7,
    name: "Aloe Vera",
    category: "Medicinal",
    description: "Succulent with healing gel for burns and skin irritations. Easy to care for and very useful.",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1567689265664-1c48de61db0b?w=400&h=400&fit=crop",
  },
  {
    id: 8,
    name: "Chamomile",
    category: "Medicinal",
    description: "Daisy-like flowers used for calming teas. Known for its soothing and sleep-promoting properties.",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1603655183122-1e8d27965cbe?w=400&h=400&fit=crop",
  },
  {
    id: 9,
    name: "Basil",
    category: "Medicinal",
    description: "Holy basil with medicinal properties. Used in traditional medicine for stress relief and immunity.",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=400&h=400&fit=crop",
  },
  {
    id: 10,
    name: "Lemon Balm",
    category: "Medicinal",
    description: "Citrus-scented herb with calming effects. Great for reducing anxiety and promoting sleep.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1603553328474-9765d6b5c560?w=400&h=400&fit=crop",
  },
  {
    id: 11,
    name: "Peppermint",
    category: "Medicinal",
    description: "Strong menthol scent aids digestion and relieves headaches. Versatile herb for health and wellness.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1628556270448-4d4e5a7cf2b6?w=400&h=400&fit=crop",
  },
  {
    id: 12,
    name: "Sage",
    category: "Medicinal",
    description: "Aromatic herb with antimicrobial properties. Used traditionally for memory and cognitive health.",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1613144032275-3c2b62b1c96a?w=400&h=400&fit=crop",
  },
];

export const getPlantsByCategory = (category) => {
  return plants.filter((plant) => plant.category === category);
};
