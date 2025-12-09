import { HStack, Button } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { LAYOUT } from '../constants/layout'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  const currentLanguage = i18n.language

  return (
    <HStack
      width={LAYOUT.NAVIGATION_WIDTH}
      mb={2}
      gap={1}
      justifyContent="flex-start"
      data-component="Language-Switcher"
    >
      <Button
        size="sm"
        variant={currentLanguage === 'en' ? 'solid' : 'outline'}
        colorScheme={currentLanguage === 'en' ? 'black' : 'gray'}
        onClick={() => changeLanguage('en')}
        borderRadius={0}
        px={3}
        py={1}
        fontSize="xs"
        fontWeight="normal"
        minW="auto"
        color="black"
        _hover={{ color: 'black' }}
        _active={{ color: 'black' }}
      >
        EN
      </Button>
      <Button
        size="sm"
        variant={currentLanguage === 'zh' ? 'solid' : 'outline'}
        colorScheme={currentLanguage === 'zh' ? 'black' : 'gray'}
        onClick={() => changeLanguage('zh')}
        borderRadius={0}
        px={3}
        py={1}
        fontSize="xs"
        fontWeight="normal"
        minW="auto"
        color="black"
        _hover={{ color: 'black' }}
        _active={{ color: 'black' }}
      >
        中文
      </Button>
      <Button
        size="sm"
        variant={currentLanguage === 'de' ? 'solid' : 'outline'}
        colorScheme={currentLanguage === 'de' ? 'black' : 'gray'}
        onClick={() => changeLanguage('de')}
        borderRadius={0}
        px={3}
        py={1}
        fontSize="xs"
        fontWeight="normal"
        minW="auto"
        color="black"
        _hover={{ color: 'black' }}
        _active={{ color: 'black' }}
      >
        DE
      </Button>
    </HStack>
  )
}

