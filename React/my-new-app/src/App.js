import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';

function App() {
  const [cartMessage, setCartMessage] = useState(""); // blank at start

  function addToCart() {
    setCartMessage("🛒 Lipstick added to cart!");
  }

  return (
    <>
      <Header />

      <main className="main-content">
        <div className="card">
          <h2>💄 Lipstick</h2>
          <p>Price: ₹299</p>
          <button className="click-btn" onClick={addToCart}>
            Add to Cart
          </button>
          <p style={{ color: "green", marginTop: "10px" }}>{cartMessage}</p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
