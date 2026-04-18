import React from 'react'
import '../styles/LabelCard.css'

function LabelCard({ icon, title, gradient, textColor }) {
  return (
    <div className="label-card">
      <div 
        className="label-design"
        style={{ 
          background: gradient,
          color: textColor
        }}
      >
        <div className="label-icon">{icon}</div>
        <div className="label-title">{title}</div>
        <div className="label-subtitle">100% Natural Juice</div>
      </div>
      
      <div className="dimension-lines">
        <div className="dim-horizontal">
          <div className="dim-label dim-h-label">350mm</div>
        </div>
        <div className="dim-vertical">
          <div className="dim-label dim-v-label">200mm</div>
        </div>
      </div>
    </div>
  )
}

export default LabelCard
