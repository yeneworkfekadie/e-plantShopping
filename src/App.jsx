import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ProductListing from './pages/ProductListing';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (plant) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === plant.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...plant, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <div className="app">
        <Navbar cartCount={cartCount} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/products"
              element={<ProductListing onAddToCart={handleAddToCart} />}
            />
            <Route
              path="/cart"
              element={
                <ShoppingCart
                  cartItems={cartItems}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemove={handleRemoveItem}
                  onClearCart={handleClearCart}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
