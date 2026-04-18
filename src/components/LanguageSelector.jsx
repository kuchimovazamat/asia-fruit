import React, { useEffect, useRef } from 'react'
import { Globe } from 'lucide-react'
import { useTranslation } from '../context/TranslationContext'
import '../styles/LanguageSelector.css'

function LanguageSelector() {
  const { language, changeLanguage } = useTranslation()
  const [isOpen, setIsOpen] = React.useState(false)
  const dropdownRef = useRef(null)

  const languages = [
    { code: 'uz', name: "O'zbek", flag: '🇺🇿' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'kz', name: 'Қазақ', flag: '🇰🇿' },
    { code: 'tj', name: 'Тоҷикӣ', flag: '🇹🇯' },
    { code: 'kg', name: 'Кыргызча', flag: '🇰🇬' }
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode)
    setIsOpen(false)
  }

  const currentLang = languages.find(lang => lang.code === language)

  return (
    <div className="language-selector" ref={dropdownRef}>
      <button 
        className="lang-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
      >
        <Globe size={18} />
        <span className="lang-flag">{currentLang.flag}</span>
        <span className="lang-name">{currentLang.name}</span>
        <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>

      {isOpen && (
        <div className="lang-dropdown">
          {languages.map(lang => (
            <button
              key={lang.code}
              className={`lang-option ${language === lang.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <span className="lang-flag">{lang.flag}</span>
              <span className="lang-name">{lang.name}</span>
              {language === lang.code && (
                <span className="check-mark">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSelector
