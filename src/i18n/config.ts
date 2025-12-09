import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslations from './locales/en.json'
import zhTranslations from './locales/zh.json'
import deTranslations from './locales/de.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      zh: {
        translation: zhTranslations,
      },
      de: {
        translation: deTranslations,
      },
    },
    lng: localStorage.getItem('i18nextLng') || 'en', // 从 localStorage 读取或默认英文
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React 已经转义了
    },
  })

export default i18n

