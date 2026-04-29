import React from 'react'
import { useTranslation } from '../context/TranslationContext'
import '../styles/LanguageSelector.css'

function LanguageSelector() {
  const { language, changeLanguage } = useTranslation()

  const languages = [
    { code: 'uz', name: "O'zbek", flag: '🇺🇿' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'kz', name: 'Қазақ', flag: '🇰🇿' },
    { code: 'tj', name: 'Тоҷикӣ', flag: '🇹🇯' },
    { code: 'kg', name: 'Кыргызча', flag: '🇰🇬' }
  ]

  return (
    <div className="language-selector-buttons">
      {languages.map(lang => (
        <button
          key={lang.code}
          className={`lang-btn ${language === lang.code ? 'active' : ''}`}
          onClick={() => changeLanguage(lang.code)}
          title={lang.name}
        >
          {lang.flag} {lang.code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default LanguageSelector
