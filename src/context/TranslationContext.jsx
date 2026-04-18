import React, { createContext, useState, useContext } from 'react'

const TranslationContext = createContext()

export const useTranslation = () => {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider')
  }
  return context
}

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('uz')

  const changeLanguage = (langCode) => {
    setLanguage(langCode)
  }

  return (
    <TranslationContext.Provider value={{ language, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  )
}
