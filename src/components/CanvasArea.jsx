import React, { useState } from 'react'
import LabelCard from './LabelCard'
import '../styles/CanvasArea.css'

function CanvasArea() {
  const [zoom, setZoom] = useState(100)

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 10, 200))
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 10, 50))

  const labels = [
    {
      id: 'apple',
      icon: '🍎',
      title: 'Apple',
      gradient: 'linear-gradient(135deg, #c31432 0%, #e63946 50%, #f77f00 100%)',
      textColor: 'white'
    },
    {
      id: 'pineapple',
      icon: '🍍',
      title: 'Pineapple',
      gradient: 'linear-gradient(135deg, #f4d03f 0%, #ffd60a 50%, #fcbf49 100%)',
      textColor: '#2b2d42'
    },
    {
      id: 'mango',
      icon: '🥭',
      title: 'Mango',
      gradient: 'linear-gradient(135deg, #ff6b35 0%, #ffa500 50%, #fcba04 100%)',
      textColor: 'white'
    }
  ]

  return (
    <div className="canvas-area">
      <div className="canvas-header">
        <div className="canvas-title">Digital Print-Proof</div>
        <div className="zoom-controls">
          <button className="zoom-btn" onClick={handleZoomOut}>−</button>
          <span className="zoom-level">{zoom}%</span>
          <button className="zoom-btn" onClick={handleZoomIn}>+</button>
        </div>
      </div>

      <div className="labels-container" style={{ transform: `scale(${zoom / 100})` }}>
        {labels.map(label => (
          <LabelCard key={label.id} {...label} />
        ))}
      </div>
    </div>
  )
}

export default CanvasArea
