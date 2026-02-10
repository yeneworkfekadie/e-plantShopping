import PlantCard from '../components/PlantCard';
import { getPlantsByCategory } from '../data/plants';
import './ProductListing.css';

function ProductListing({ onAddToCart }) {
  const aromaticPlants = getPlantsByCategory('Aromatic');
  const medicinalPlants = getPlantsByCategory('Medicinal');

  return (
    <div className="product-listing">
      <div className="page-header">
        <h1>Our Plant Collection</h1>
        <p>Explore our curated selection of beautiful house plants</p>
      </div>

      <section className="plant-section">
        <div className="section-header">
          <h2>Aromatic Plants</h2>
          <p>Fill your home with delightful natural fragrances</p>
        </div>
        <div className="plants-grid">
          {aromaticPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      <section className="plant-section">
        <div className="section-header">
          <h2>Medicinal Plants</h2>
          <p>Natural remedies for health and wellness</p>
        </div>
        <div className="plants-grid">
          {medicinalPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductListing;
