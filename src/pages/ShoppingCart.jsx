import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import './ShoppingCart.css';

function ShoppingCart({ cartItems, onUpdateQuantity, onRemove, onClearCart }) {
  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="shopping-cart empty">
        <div className="empty-cart-content">
          <span className="empty-icon">🛒</span>
          <h2>Your Cart is Empty</h2>
          <p>Looks like you haven't added any plants to your cart yet.</p>
          <Link to="/products" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="shopping-cart">
      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>
        <p className="cart-summary">
          You have {totalItems} item{totalItems !== 1 ? 's' : ''} in your cart
        </p>

        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemove}
              />
            ))}
          </div>

          <div className="cart-sidebar">
            <div className="order-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Items ({totalItems})</span>
                <span>${totalCost.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${totalCost.toFixed(2)}</span>
              </div>
            </div>

            <div className="cart-actions">
              <Link to="/products" className="continue-shopping-btn">
                ← Continue Shopping
              </Link>
              <button className="checkout-btn" onClick={() => alert('Coming soon!')}>
                Checkout
              </button>
              <button className="clear-cart-btn" onClick={onClearCart}>
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
