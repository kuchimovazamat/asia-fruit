import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'
import '../styles/ProductCatalog.css'

function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('Barchasi')
  
  const categories = ['Barchasi', ...new Set(products.map(p => p.category))]
  
  const filteredProducts = selectedCategory === 'Barchasi' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  return (
    <div className="catalog-container">
      <div className="catalog-header">
        <h1 className="catalog-title">Bizning mahsulotlar</h1>
        <p className="catalog-subtitle">100% Tabiiy • Sun'iy bo'yoqsiz • Yuqori sifat</p>
      </div>

      <div className="category-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <Link to={`/product/${product.id}`} key={product.id} className="product-card-link">
            <div className="product-card">
              <div className="product-image-wrapper">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-image"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/300x400/161b22/58a6ff?text=${encodeURIComponent(product.name)}`
                  }}
                />
                {product.inStock ? (
                  <span className="stock-badge in-stock">Mavjud</span>
                ) : (
                  <span className="stock-badge out-stock">Tugagan</span>
                )}
              </div>
              
              <div className="product-info">
                <div className="product-category">{product.category}</div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.shortDescription}</p>
                
                <div className="product-footer">
                  <button className="btn-view-details">Batafsil →</button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProductCatalog
