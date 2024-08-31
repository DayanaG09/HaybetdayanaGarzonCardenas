import "./App.css";
import { React, useState } from "react";
import Products from "./components/productlist.js";
import Cart from "./components/cart.js";
import DetailProducts from "./components/productDetails.js";

function App() {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [view, setView] = useState("list");

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setView("list");
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setView("detail");
  };

  const handleBackToList = () => {
    setSelectedProduct(null);
    setView("list");
  };

  const handleViewCart = () => {
    setView("cart");
  };

  return (
    <div>
      <header>
        <button onClick={handleViewCart}>View Cart</button>
      </header>
      {view === "cart" && <Cart cart={cart} onBack={handleBackToList} />}
      {view === "detail" && (
        <DetailProducts
          product={selectedProduct}
          onAddToCart={addToCart}
          onBackList={handleBackToList}
        />
      )}
      {view === "list" && <Products onProductSelect={handleProductSelect} />}
    </div>
  );
}

export default App;
