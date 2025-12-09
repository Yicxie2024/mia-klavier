import { useState } from 'react'
import { VStack } from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LAYOUT } from '../constants/layout'
import LanguageSwitcher from './LanguageSwitcher'

interface MiaNavigationProps {
  currentPanel?: 'Mia' | 'Yichen'
}

export default function MiaNavigation(_props: MiaNavigationProps = {}) {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const { t } = useTranslation()
  const location = useLocation()

  // 根据当前路径判断激活的链接
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '/mia-klavier/'
    }
    return location.pathname === path || location.pathname === `/mia-klavier${path}`
  }

  return (
    <VStack
      marginTop={LAYOUT.NAVIGATION_MARGIN_TOP}
      gap={LAYOUT.NAVIGATION_GAP}
      data-component="Mia-Navigation"
      alignItems="flex-start"
      width={LAYOUT.NAVIGATION_WIDTH}
      onMouseLeave={() => setHoveredLink(null)}
      borderWidth={1}
      borderColor="gray.200"
    >
      <LanguageSwitcher />
      <RouterLink
        to="/"
        style={{
          width: LAYOUT.FULL_WIDTH,
          display: 'block',
          padding: '8px',
          backgroundColor: 'white',
          color: 'black',
          borderRadius: 0,
          textAlign: 'left',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          boxShadow:
            isActive('/') || hoveredLink === 'home' ? 'inset 0 3px 6px rgba(0,0,0,0.4)' : 'none',
        }}
        onMouseEnter={() => setHoveredLink('home')}
      >
        {t('nav.home')}
      </RouterLink>
      <RouterLink
        to="/gallery"
        style={{
          width: LAYOUT.FULL_WIDTH,
          display: 'block',
          padding: '8px',
          backgroundColor: 'black',
          color: 'white',
          borderRadius: 0,
          textAlign: 'left',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          boxShadow:
            isActive('/gallery') || hoveredLink === 'gallery'
              ? 'inset 0 3px 9px rgba(255,255,255,0.7)'
              : 'none',
        }}
        onMouseEnter={() => setHoveredLink('gallery')}
      >
        {t('nav.gallery')}
      </RouterLink>
      <RouterLink
        to="/calendar"
        style={{
          width: LAYOUT.FULL_WIDTH,
          display: 'block',
          padding: '8px',
          backgroundColor: 'white',
          color: 'black',
          borderRadius: 0,
          textAlign: 'left',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          boxShadow:
            isActive('/calendar') || hoveredLink === 'calendar'
              ? 'inset 0 3px 6px rgba(0,0,0,0.4)'
              : 'none',
        }}
        onMouseEnter={() => setHoveredLink('calendar')}
      >
        {t('nav.calendar')}
      </RouterLink>
      <RouterLink
        to="/contact"
        style={{
          width: LAYOUT.FULL_WIDTH,
          display: 'block',
          padding: '8px',
          backgroundColor: 'black',
          color: 'white',
          borderRadius: 0,
          textAlign: 'left',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          boxShadow:
            isActive('/contact') || hoveredLink === 'contact'
              ? 'inset 0 3px 9px rgba(255,255,255,0.7)'
              : 'none',
        }}
        onMouseEnter={() => setHoveredLink('contact')}
      >
        {t('nav.contact')}
      </RouterLink>
    </VStack>
  )
}
