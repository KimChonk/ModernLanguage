import React, { useState } from "react";
import {
  products,
  productNamePrice,
  productsInStock,
  hasExpensiveProduct,
  allAccessoriesAvailable,
} from "./models/Product";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState(2);

  // Câu 7: Tính tổng giá trị kho hàng
  const calculateInventoryValue = () => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <div className="app">
      <nav className="app-nav">
        <div className="nav-buttons">
          <button 
            className={`nav-btn ${activeTab === 2 ? "active" : ""}`}
            onClick={() => setActiveTab(2)}
          >
            Question 2: All Products
          </button>
          <button 
            className={`nav-btn ${activeTab === 3 ? "active" : ""}`}
            onClick={() => setActiveTab(3)}
          >
            Question 3: Name & Price
          </button>
          <button 
            className={`nav-btn ${activeTab === 4 ? "active" : ""}`}
            onClick={() => setActiveTab(4)}
          >
            Question 4: In Stock
          </button>
          <button 
            className={`nav-btn ${activeTab === 5 ? "active" : ""}`}
            onClick={() => setActiveTab(5)}
          >
            Question 5: Price more than 30M
          </button>
          <button 
            className={`nav-btn ${activeTab === 6 ? "active" : ""}`}
            onClick={() => setActiveTab(6)}
          >
            Question 6: Accessories Sale
          </button>
          <button 
            className={`nav-btn ${activeTab === 7 ? "active" : ""}`}
            onClick={() => setActiveTab(7)}
          >
            Question 7: Total Value
          </button>
        </div>
      </nav>

      <div className="container">
        {/* Question 2: All Products */}
        {activeTab === 2 && (
          <section className="section">
            <h2>Question 2: All Products (10 products, 3 categories)</h2>
            <div className="products-grid">
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-header">
                    <span className="product-id">#{product.id}</span>
                    <span className={`category-badge ${product.category.toLowerCase()}`}>
                      {product.category}
                    </span>
                  </div>
                  <h3>{product.name}</h3>
                  <div className="product-info">
                    <p>
                      <strong>Price:</strong> ${product.price.toLocaleString()}
                    </p>
                    <p>
                      <strong>Qty:</strong> {product.quantity}
                    </p>
                    <p>
                      <strong>Status:</strong>{" "}
                      <span className={product.isAvailable ? "available" : "unavailable"}>
                        {product.isAvailable ? "Available" : "Unavailable"}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Question 3: Name & Price */}
        {activeTab === 3 && (
          <section className="section">
            <h2>Question 3: Product Names & Prices</h2>
            <div className="products-grid">
              {productNamePrice.map((item, index) => (
                <div key={index} className="product-card">
                  <h3>{item.name}</h3>
                  <div className="product-info">
                    <p>
                      <strong>Price:</strong> ${item.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Question 4: In Stock */}
        {activeTab === 4 && (
          <section className="section">
            <h2>Question 4: Products In Stock (quantity &gt; 0)</h2>
            <div className="products-grid">
              {productsInStock.length > 0 ? (
                productsInStock.map((product) => (
                  <div key={product.id} className="product-card">
                    <div className="product-header">
                      <span className="product-id">#{product.id}</span>
                      <span className="stock-badge">In Stock</span>
                    </div>
                    <h3>{product.name}</h3>
                    <p className="stock-info">
                      Qty: <strong>{product.quantity}</strong>
                    </p>
                  </div>
                ))
              ) : (
                <p className="no-data">No products in stock</p>
              )}
            </div>
          </section>
        )}

        {/* Question 5: Price > 30M */}
        {activeTab === 5 && (
          <section className="section">
            <h2>Question 5: Products with Price more than $30,000,000</h2>
            <div className="products-grid">
              {products.filter((p) => p.price > 30000000).length > 0 ? (
                products
                  .filter((p) => p.price > 30000000)
                  .map((product) => (
                    <div key={product.id} className="product-card">
                      <div className="product-header">
                        <span className="product-id">#{product.id}</span>
                        <span className={`category-badge ${product.category.toLowerCase()}`}>
                          {product.category}
                        </span>
                      </div>
                      <h3>{product.name}</h3>
                      <div className="product-info">
                        <p>
                          <strong>Price:</strong> ${product.price.toLocaleString()}
                        </p>
                        <p>
                          <strong>Qty:</strong> {product.quantity}
                        </p>
                        <p>
                          <strong>Status:</strong>{" "}
                          <span className={product.isAvailable ? "available" : "unavailable"}>
                            {product.isAvailable ? "Available" : "Unavailable"}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))
              ) : (
                <p className="no-data">No products with price over $30,000,000</p>
              )}
            </div>
          </section>
        )}

        {/* Question 6: Accessories Sale */}
        {activeTab === 6 && (
          <section className="section">
            <h2>Question 6: Accessories Products</h2>
            <div className="products-grid">
              {products.filter((p) => p.category === "Accessories").length > 0 ? (
                products
                  .filter((p) => p.category === "Accessories")
                  .map((product) => (
                    <div key={product.id} className="product-card">
                      <div className="product-header">
                        <span className="product-id">#{product.id}</span>
                        <span className={`category-badge ${product.category.toLowerCase()}`}>
                          {product.category}
                        </span>
                      </div>
                      <h3>{product.name}</h3>
                      <div className="product-info">
                        <p>
                          <strong>Price:</strong> ${product.price.toLocaleString()}
                        </p>
                        <p>
                          <strong>Qty:</strong> {product.quantity}
                        </p>
                        <p>
                          <strong>Status:</strong>{" "}
                          <span className={product.isAvailable ? "available" : "unavailable"}>
                            {product.isAvailable ? "Available" : "Unavailable"}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))
              ) : (
                <p className="no-data">No Accessories products found</p>
              )}
            </div>
          </section>
        )}

        {/* Question 7: Total Value */}
        {activeTab === 7 && (
          <section className="section">
            <h2>Question 7: Total Inventory Value (Price × Qty)</h2>
            <div className="products-grid">
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-header">
                    <span className="product-id">#{product.id}</span>
                    <span className={`category-badge ${product.category.toLowerCase()}`}>
                      {product.category}
                    </span>
                  </div>
                  <h3>{product.name}</h3>
                  <div className="product-info">
                    <p>
                      <strong>Price:</strong> ${product.price.toLocaleString()}
                    </p>
                    <p>
                      <strong>Qty:</strong> {product.quantity}
                    </p>
                    <p>
                      <strong>Total Value:</strong> ${(product.price * product.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="summary-box">
              <p><strong>Total Inventory Value: ${calculateInventoryValue().toLocaleString()}</strong></p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default App;
