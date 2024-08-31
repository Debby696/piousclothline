import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <h1>Welcome to Pious Clothline</h1>
          <p>Your one-stop shop for stylish and affordable clothing</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
      </header>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="products-grid">
          <div className="product-card">
            <img src="product1.jpg" alt="Product 1" />
            <h3>Product 1</h3>
            <p>$25.00</p>
          </div>
          <div className="product-card">
            <img src="product2.jpg" alt="Product 2" />
            <h3>Product 2</h3>
            <p>$30.00</p>
          </div>
          <div className="product-card">
            <img src="product3.jpg" alt="Product 3" />
            <h3>Product 3</h3>
            <p>$20.00</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Pious Clothline. All rights reserved.</p>
        <div className="social-media">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
