import React, { useState } from 'react'
import { ClipboardList, Palette, Image, FileText } from 'lucide-react'
import '../styles/Sidebar.css'

function Sidebar() {
  const [activeLabels, setActiveLabels] = useState(['apple', 'pineapple', 'mango'])

  const specifications = [
    { label: 'Material', value: 'PVC' },
    { label: 'Roll Width', value: '650mm' },
    { label: 'Label Dimensions', value: '350 × 200mm' },
    { label: 'Print Method', value: 'Offset Printing' }
  ]

  const colorPalette = [
    { code: '#C31432', name: 'Red - Apple Base' },
    { code: '#E63946', name: 'Red - Apple Accent' },
    { code: '#F4D03F', name: 'Yellow - Pineapple' },
    { code: '#FFD60A', name: 'Gold - Accent' },
    { code: '#FF6B35', name: 'Orange - Mango Base' },
    { code: '#FFA500', name: 'Orange - Mango Accent' },
    { code: '#FFFFFF', name: 'White - Text' }
  ]

  const previewLabels = [
    { id: 'apple', gradient: 'linear-gradient(135deg, #c31432 0%, #e63946 100%)' },
    { id: 'pineapple', gradient: 'linear-gradient(135deg, #f4d03f 0%, #ffd60a 100%)' },
    { id: 'mango', gradient: 'linear-gradient(135deg, #ff6b35 0%, #ffa500 100%)' }
  ]

  const toggleLabel = (id) => {
    setActiveLabels(prev => 
      prev.includes(id) 
        ? prev.filter(labelId => labelId !== id)
        : [...prev, id]
    )
  }

  return (
    <aside className="sidebar">
      {/* Technical Specifications */}
      <div className="sidebar-section">
        <div className="section-title">
          <ClipboardList className="section-icon" size={22} />
          Technical Specifications
        </div>
        
        {specifications.map((spec, index) => (
          <div key={index} className="spec-field">
            <div className="spec-label">{spec.label}</div>
            <div className="spec-value">{spec.value}</div>
          </div>
        ))}
      </div>

      <div className="divider"></div>

      {/* Color Palette */}
      <div className="sidebar-section">
        <div className="section-title">
          <Palette className="section-icon" size={22} />
          7-Color Palette
        </div>
        
        <div className="color-palette">
          {colorPalette.map((color, index) => (
            <div 
              key={index}
              className="color-swatch" 
              style={{ background: color.code }}
              title={color.name}
            >
              <div className="color-code">{color.code}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="divider"></div>

      {/* Label Selection */}
      <div className="sidebar-section">
        <div className="section-title">
          <Image className="section-icon" size={22} />
          Active Labels
        </div>
        
        <div className="preview-grid">
          {previewLabels.map(label => (
            <div 
              key={label.id}
              className={`preview-thumb ${activeLabels.includes(label.id) ? 'active' : ''}`}
              style={{ background: label.gradient }}
              title={label.id.charAt(0).toUpperCase() + label.id.slice(1)}
              onClick={() => toggleLabel(label.id)}
            ></div>
          ))}
        </div>
      </div>

      <div className="divider"></div>

      {/* Notes */}
      <div className="sidebar-section">
        <div className="section-title">
          <FileText className="section-icon" size={22} />
          Production Notes
        </div>
        
        <div className="notes-box">
          <strong>Quality Check:</strong> All labels must pass color calibration test before final production run.
          <br /><br />
          <strong>Deadline:</strong> Final approval required by April 25, 2026
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
