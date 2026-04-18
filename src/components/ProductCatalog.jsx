import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'
import { useTranslation } from '../context/TranslationContext'
import locales from '../locales'
import '../styles/ProductCatalog.css'

const ALL_CATEGORIES_KEY = '__all__'

function ProductCatalog() {
  const { language } = useTranslation()
  const t = locales[language]
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES_KEY)
  
  const categoryKeys = [...new Set(products.map(p => p.category))]
  const categories = [
    { key: ALL_CATEGORIES_KEY, label: t.allCategories },
    ...categoryKeys.map((key) => ({ key, label: t.categories[key] || key }))
  ]
  
  const filteredProducts = selectedCategory === ALL_CATEGORIES_KEY 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  return (
    <div className="catalog-container">
      <div className="catalog-header">
        <h1 className="catalog-title">{t.catalogTitle || 'Bizning mahsulotlar'}</h1>
        <p className="catalog-subtitle">{t.catalogSubtitle || "100% Tabiiy • Sun'iy bo'yoqsiz • Yuqori sifat"}</p>
      </div>

      <div className="category-filters">
        {categories.map(category => (
          <button
            key={category.key}
            className={`category-btn ${selectedCategory === category.key ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.key)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => {
          const translated = t.products[product.id]
          return (
          <Link to={`/product/${product.id}`} key={product.id} className="product-card-link">
            <div className="product-card">
              <div className="product-image-wrapper">
                <img 
                  src={product.image} 
                  alt={translated.name || product.name}
                  className="product-image"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/300x400/161b22/58a6ff?text=${encodeURIComponent(product.name)}`
                  }}
                />
                {product.inStock ? (
                  <span className="stock-badge in-stock">{t.inStock}</span>
                ) : (
                  <span className="stock-badge out-stock">{t.outOfStock}</span>
                )}
              </div>
              
              <div className="product-info">
                <div className="product-category">{t.categories[product.category] || product.category}</div>
                <h3 className="product-name">{translated.name || product.name}</h3>
                <p className="product-description">{translated.shortDescription || product.shortDescription}</p>
                
                <div className="product-footer">
                  <button className="btn-view-details">{t.details} →</button>
                </div>
              </div>
            </div>
          </Link>
        )})}
      </div>
    </div>
  )
}

export default ProductCatalog
