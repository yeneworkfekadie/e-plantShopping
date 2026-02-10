import './CartItem.css';

export const calculateTotalCartAmount = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
};

function CartItem({ item, onUpdateQuantity, onRemove }) {
  const totalPrice = item.price * item.quantity;

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="item-details">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-category">{item.category}</p>
        <p className="item-unit-price">${item.price.toFixed(2)} each</p>
      </div>
      <div className="item-controls">
        <div className="quantity-controls">
          <button
            className="qty-btn"
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            −
          </button>
          <span className="quantity">{item.quantity}</span>
          <button
            className="qty-btn"
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
        <p className="item-total">${totalPrice.toFixed(2)}</p>
        <button className="delete-btn" onClick={() => onRemove(item.id)}>
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}

export default CartItem;
