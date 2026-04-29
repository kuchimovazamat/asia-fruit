import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { products } from '../data/products'
import { getDetailedProductInfo, hasDetailedInfo } from '../data/detailedProductInfo'
import { useTranslation } from '../context/TranslationContext'
import locales from '../locales'
import { ClipboardList, Apple, Info, Package, Factory, Award } from 'lucide-react'
import '../styles/ProductDetail.css'

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { language } = useTranslation()
  const t = locales[language]
  const product = products.find(p => p.id === parseInt(id))
  const translated = product ? t.products[product.id] : null
  const detailedInfo = product ? getDetailedProductInfo(product.id) : null

  if (!product) {
    return (
      <div className="not-found">
        <h2>{t.productNotFound}</h2>
        <Link to="/" className="btn btn-primary">{t.backToCatalog}</Link>
      </div>
    )
  }

  return (
    <div className="detail-container">
      <div className="detail-header-row">
        <button className="back-btn" onClick={() => navigate('/')}>
          ← {t.backToCatalog}
        </button>
      </div>

      <div className="detail-content">
        {/* Left Side - Product Image */}
        <div className="detail-image-section">
          <img 
            src={product.image} 
            alt={translated.name || product.name}
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
            <span className="detail-category">{t.categories[product.category] || product.category}</span>
            <h1 className="detail-title">{translated.name || product.name}</h1>
            <p className="detail-description">{translated.shortDescription || product.shortDescription}</p>
          </div>

          <div className="divider"></div>

          {/* Ingredients Section */}
          <div className="detail-section">
            <h2 className="section-title">
              <ClipboardList className="section-icon" size={22} />
              {t.ingredients}
            </h2>
            <ul className="ingredients-list">
              {product.ingredients.map((ingredient, index) => (
                <li key={index} className="ingredient-item">
                  <span className="ingredient-bullet">•</span>
                  {t.commonIngredients[ingredient] || ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div className="divider"></div>

          {/* Nutrition Facts */}
          <div className="detail-section">
            <h2 className="section-title">
              <Apple className="section-icon" size={22} />
              {t.nutrition}
            </h2>
            <div className="nutrition-info">
              <div className="nutrition-serving">{t.servingSize} ({product.nutrition.servingSize})</div>
              <div className="nutrition-grid">
                <div className="nutrition-item">
                  <span className="nutrition-label">{t.calories}</span>
                  <span className="nutrition-value">{product.nutrition.calories}</span>
                </div>
                <div className="nutrition-item">
                  <span className="nutrition-label">{t.carbs}</span>
                  <span className="nutrition-value">{product.nutrition.carbs}</span>
                </div>
                <div className="nutrition-item">
                  <span className="nutrition-label">{t.sugar}</span>
                  <span className="nutrition-value">{product.nutrition.sugar}</span>
                </div>
                <div className="nutrition-item">
                  <span className="nutrition-label">{t.protein}</span>
                  <span className="nutrition-value">{product.nutrition.protein}</span>
                </div>
                <div className="nutrition-item">
                  <span className="nutrition-label">{t.fat}</span>
                  <span className="nutrition-value">{product.nutrition.fat}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          {/* Additional Info */}
          <div className="detail-section">
            <h2 className="section-title">
              <Info className="section-icon" size={22} />
              {t.productInfo}
            </h2>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">{t.allergens}</span>
                <span className="info-value">{translated.allergens || product.allergens}</span>
              </div>
              <div className="info-item">
                <span className="info-label">{t.storage}</span>
                <span className="info-value">{translated.storage || product.storage}</span>
              </div>
              <div className="info-item">
                <span className="info-label">{t.origin}</span>
                <span className="info-value">{translated.origin || product.origin}</span>
              </div>
              <div className="info-item">
                <span className="info-label">{t.availability}</span>
                <span className={`info-value ${product.inStock ? 'in-stock-text' : 'out-stock-text'}`}>
                  {product.inStock ? `✓ ${t.inStock}` : `✗ ${t.outOfStock}`}
                </span>
              </div>
            </div>
          </div>

          {/* Detailed Product Information - Only show if available */}
          {detailedInfo && (
            <>
              <div className="divider"></div>

              {/* Volume & Description */}
              {(detailedInfo.volume || detailedInfo.variants) && (
                <div className="detail-section">
                  {detailedInfo.variants ? (
                    <div className="variants-container">
                      <h3 className="variants-title">{t.volume}:</h3>
                      <div className="variants-list">
                        {detailedInfo.variants.map((variant, index) => (
                          <div key={index} className="variant-item">
                            <span className="variant-volume">{variant.volume}</span>
                            {variant.packaging && variant.packaging.dimensions && (
                              <span className="variant-dimensions">
                                ({variant.packaging.dimensions.join(' × ')} {variant.packaging.unit})
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="info-grid">
                      <div className="info-item">
                        <span className="info-label">{t.volume}</span>
                        <span className="info-value">{detailedInfo.volume}</span>
                      </div>
                    </div>
                  )}
                  {detailedInfo.description && detailedInfo.description[language] && (
                    <p className="detailed-description">{detailedInfo.description[language]}</p>
                  )}
                </div>
              )}

              {/* Detailed Ingredients */}
              {detailedInfo.detailedIngredients && detailedInfo.detailedIngredients[language] && (
                <>
                  <div className="divider"></div>
                  <div className="detail-section">
                    <h2 className="section-title">
                      <ClipboardList className="section-icon" size={22} />
                      {t.detailedIngredients}
                    </h2>
                    <p className="detailed-ingredients-text">{detailedInfo.detailedIngredients[language]}</p>
                  </div>
                </>
              )}

              {/* Nutrition Per 100ml */}
              {detailedInfo.nutritionPer100ml && (
                <>
                  <div className="divider"></div>
                  <div className="detail-section">
                    <h2 className="section-title">
                      <Apple className="section-icon" size={22} />
                      {t.nutritionPer100ml}
                    </h2>
                    <div className="nutrition-grid">
                      {detailedInfo.nutritionPer100ml.carbohydrates && (
                        <div className="nutrition-item">
                          <span className="nutrition-label">{t.carbohydrates}</span>
                          <span className="nutrition-value">
                            {detailedInfo.nutritionPer100ml.carbohydrates.amount}
                            {detailedInfo.nutritionPer100ml.carbohydrates.variance && 
                              ` ${detailedInfo.nutritionPer100ml.carbohydrates.variance}`}
                          </span>
                        </div>
                      )}
                      {detailedInfo.nutritionPer100ml.energy && (
                        <div className="nutrition-item">
                          <span className="nutrition-label">{t.energyValue}</span>
                          <span className="nutrition-value">
                            {detailedInfo.nutritionPer100ml.energy.kcal} kCal / {detailedInfo.nutritionPer100ml.energy.kj} kJ
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}

              {/* Storage Conditions */}
              {detailedInfo.storage && (
                <>
                  <div className="divider"></div>
                  <div className="detail-section">
                    <h2 className="section-title">
                      <Package className="section-icon" size={22} />
                      {t.storageConditions}
                    </h2>
                    <div className="info-grid">
                      {detailedInfo.storage.temperature && (
                        <div className="info-item">
                          <span className="info-label">{t.temperature}</span>
                          <span className="info-value">
                            {detailedInfo.storage.temperature.min}{detailedInfo.storage.temperature.unit} - {detailedInfo.storage.temperature.max}{detailedInfo.storage.temperature.unit}
                          </span>
                        </div>
                      )}
                      {detailedInfo.storage.humidity && (
                        <div className="info-item">
                          <span className="info-label">{t.humidity}</span>
                          <span className="info-value">
                            Max {detailedInfo.storage.humidity.max}{detailedInfo.storage.humidity.unit}
                          </span>
                        </div>
                      )}
                    </div>
                    {detailedInfo.storage.conditions && detailedInfo.storage.conditions[language] && (
                      <p className="storage-note">{detailedInfo.storage.conditions[language]}</p>
                    )}
                  </div>
                </>
              )}

              {/* Shelf Life */}
              {detailedInfo.shelfLife && (
                <>
                  <div className="divider"></div>
                  <div className="detail-section">
                    <div className="info-grid">
                      <div className="info-item">
                        <span className="info-label">{t.shelfLife}</span>
                        <span className="info-value">
                          {detailedInfo.shelfLife.months} {language === 'uz' ? 'oy' : language === 'ru' ? 'месяцев' : language === 'en' ? 'months' : language === 'kz' ? 'ай' : language === 'tj' ? 'моҳ' : 'ай'}
                          {detailedInfo.shelfLife.note && detailedInfo.shelfLife.note[language] && 
                            ` (${detailedInfo.shelfLife.note[language]})`}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Manufacturer Info */}
              {detailedInfo.manufacturer && (
                <>
                  <div className="divider"></div>
                  <div className="detail-section">
                    <h2 className="section-title">
                      <Factory className="section-icon" size={22} />
                      {t.manufacturer}
                    </h2>
                    <div className="manufacturer-info">
                      <p className="manufacturer-name">{detailedInfo.manufacturer.name}</p>
                      {detailedInfo.manufacturer.fullAddress && detailedInfo.manufacturer.fullAddress[language] && (
                        <p className="manufacturer-address">
                          <strong>{t.address}:</strong> {detailedInfo.manufacturer.fullAddress[language]}
                        </p>
                      )}
                      {detailedInfo.manufacturer.contacts && (
                        <div className="manufacturer-contacts">
                          {detailedInfo.manufacturer.contacts.phone && (
                            <p><strong>{t.phone}:</strong> {detailedInfo.manufacturer.contacts.phone}</p>
                          )}
                          {detailedInfo.manufacturer.contacts.website && (
                            <p><strong>{t.website}:</strong> <a href={`http://${detailedInfo.manufacturer.contacts.website}`} target="_blank" rel="noopener noreferrer">{detailedInfo.manufacturer.contacts.website}</a></p>
                          )}
                          {detailedInfo.manufacturer.contacts.email && (
                            <p><strong>{t.email}:</strong> <a href={`mailto:${detailedInfo.manufacturer.contacts.email}`}>{detailedInfo.manufacturer.contacts.email}</a></p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}

              {/* Packaging & Certifications */}
              <div className="divider"></div>
              <div className="detail-section">
                <h2 className="section-title">
                  <Award className="section-icon" size={22} />
                  {t.productInfo}
                </h2>
                <div className="info-grid">
                  {detailedInfo.packaging && detailedInfo.packaging.dimensions && (
                    <div className="info-item">
                      <span className="info-label">{t.dimensions}</span>
                      <span className="info-value">
                        {detailedInfo.packaging.dimensions.join(' × ')} {detailedInfo.packaging.unit}
                      </span>
                    </div>
                  )}
                  {/* Packaging already shown in variants section if variants exist */}
                </div>
                {detailedInfo.certifications && detailedInfo.certifications[language] && (
                  <div className="certifications-list">
                    <p className="info-label">{t.certifications}:</p>
                    <ul>
                      {detailedInfo.certifications[language].map((cert, index) => (
                        <li key={index}>{cert}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
