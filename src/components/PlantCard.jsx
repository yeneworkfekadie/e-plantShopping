import { useState } from 'react';
import './PlantCard.css';

function PlantCard({ plant, onAddToCart }) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(plant);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="plant-card">
      <div className="plant-image-container">
        <img src={plant.image} alt={plant.name} className="plant-image" />
      </div>
      <div className="plant-info">
        <h3 className="plant-name">{plant.name}</h3>
        <p className="plant-description">{plant.description}</p>
        <div className="plant-footer">
          <span className="plant-price">${plant.price.toFixed(2)}</span>
          <button
            className={`add-to-cart-btn ${added ? 'added' : ''}`}
            onClick={handleAddToCart}
          >
            {added ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlantCard;
