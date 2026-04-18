import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../context/TranslationContext'
import locales from '../locales'
import LanguageSelector from './LanguageSelector'
import '../styles/Header.css'

function Header() {
  const { language } = useTranslation()
  const t = locales[language]

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo-link">
          <h1 className="company-name">{t.companyName}</h1>
          <p className="company-tagline">{t.tagline}</p>
        </Link>
        <LanguageSelector />
      </div>
    </header>
  )
}

export default Header
