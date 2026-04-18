import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { products } from '../data/products'
import '../styles/ProductDetail.css'

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="not-found">
        <h2>Mahsulot topilmadi</h2>
        <Link to="/" className="btn btn-primary">Katalogga qaytish</Link>
      </div>
    )
  }

  return (
    <div className="detail-container">
      <button className="back-btn" onClick={() => navigate('/')}>
        ← Mahsulotlarga qaytish
      </button>

      <div className="detail-content">
        {/* Left Side - Product Image */}
        <div className="detail-image-section">
          <img 
            src={product.image} 
            alt={product.name}
            className="detail-image"
            onError={(e) => {
              e.target.src = `https://via.placeholder.com/500x600/161b22/58a6ff?text=${encodeURIComponent(product.name)}`
            }}
          />
          <div className="image-thumbnails">
            <div className="thumbnail active">
              <img src={product.image} alt="View 1" onError={(e) => e.target.style.display = 'none'} />
            </div>
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="detail-info-section">
          <div className="detail-header">
            <span className="detail-category">{product.category}</span>
            <h1 className="detail-title">{product.name}</h1>
            <p className="detail-description">{product.shortDescription}</p>
          </div>

          <div className="detail-actions">
            <button className="btn btn-primary btn-large">Buyurtma berish</button>
            <button className="btn btn-secondary btn-large">📞 Aloqa</button>
          </div>

          <div className="divider"></div>

          {/* Ingredients Section */}
          <div className="detail-section">
            <h2 className="section-title">
              <span className="section-icon">📋</span>
              Tarkibi
            </h2>
            <ul className="ingredients-list">
              {product.ingredients.map((ingredient, index) => (
                <li key={index} className="ingredient-item">
                  <span className="ingredient-bullet">•</span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div className="divider"></div>

          {/* Nutrition Facts */}
          <div className="detail-section">
            <h2 className="section-title">
              <span className="section-icon">🥗</span>
              Ozuqaviy qiymati
            </h2>
            <div className="nutrition-info">
              <div className="nutrition-serving">Bir porsiya ({product.nutrition.servingSize})</div>
              <div className="nutrition-grid">
                <div className="nutrition-item">
                  <span className="nutrition-label">Kaloriya</span>
                  <span className="nutrition-value">{product.nutrition.calories}</span>
                </div>
                <div className="nutrition-item">
                  <span className="nutrition-label">Uglevodlar</span>
                  <span className="nutrition-value">{product.nutrition.carbs}</span>
                </div>
                <div className="nutrition-item">
                  <span className="nutrition-label">Shakar</span>
                  <span className="nutrition-value">{product.nutrition.sugar}</span>
                </div>
                <div className="nutrition-item">
                  <span className="nutrition-label">Oqsil</span>
                  <span className="nutrition-value">{product.nutrition.protein}</span>
                </div>
                <div className="nutrition-item">
                  <span className="nutrition-label">Yog'</span>
                  <span className="nutrition-value">{product.nutrition.fat}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          {/* Additional Info */}
          <div className="detail-section">
            <h2 className="section-title">
              <span className="section-icon">ℹ️</span>
              Mahsulot haqida ma'lumot
            </h2>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Allergenlar</span>
                <span className="info-value">{product.allergens}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Saqlash</span>
                <span className="info-value">{product.storage}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Ishlab chiqaruvchi</span>
                <span className="info-value">{product.origin}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Mavjudlik</span>
                <span className={`info-value ${product.inStock ? 'in-stock-text' : 'out-stock-text'}`}>
                  {product.inStock ? '✓ Mavjud' : '✗ Tugagan'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
