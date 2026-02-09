# Paradise Nursery

A beautiful shopping cart application for an online plant shop offering a variety of house plants including aromatic and medicinal plants.

![Paradise Nursery](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-5-purple) ![License](https://img.shields.io/badge/License-MIT-green)

## Features

- **Landing Page** - Welcoming homepage with a call-to-action button to browse products
- **Navigation Bar** - Sticky navbar with links to Home, Products, and Cart pages with a dynamic cart quantity badge
- **Product Listing** - Organized into two sections:
  - **Aromatic Plants** - Lavender, Jasmine, Rosemary, Mint, Gardenia, Eucalyptus
  - **Medicinal Plants** - Aloe Vera, Chamomile, Basil, Lemon Balm, Peppermint, Sage
- **Plant Cards** - Each card displays plant image, name, description, price, and Add to Cart button
- **Shopping Cart** - Full-featured cart page with:
  - Item thumbnails and details
  - Unit cost and total cost per plant type
  - Quantity increase/decrease controls
  - Delete button to remove items
  - Order summary with total calculation
  - Continue Shopping and Checkout buttons
  - Clear Cart functionality

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **CSS** - Styling with custom CSS files

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Navigation with cart badge
│   ├── PlantCard.jsx     # Product display card
│   └── CartItem.jsx      # Cart item with controls
├── pages/
│   ├── LandingPage.jsx   # Home page
│   ├── ProductListing.jsx # Products with sections
│   └── ShoppingCart.jsx  # Cart page
├── data/
│   └── plants.js         # Plant data
├── App.jsx               # Main app with routing
└── main.jsx              # Entry point
```

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Usage

1. Start the dev server with `npm run dev`
2. Open your browser to `http://localhost:5173`
3. Browse plants on the landing page and click "Get Started"
4. Add plants to your cart from the product listing page
5. View your cart and manage quantities
6. Proceed to checkout or continue shopping

## Cart Features

- **Add to Cart** - Click the button on any plant card to add it to your cart
- **Update Quantity** - Use + and - buttons in the cart to adjust quantities
- **Remove Items** - Click the Delete button to remove a plant from your cart
- **Clear Cart** - Remove all items at once with the Clear Cart button
- **Cart Badge** - The navbar shows the total number of items in your cart

## License

MIT
