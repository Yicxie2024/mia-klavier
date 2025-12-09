import { Box, Heading, Flex } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { LAYOUT } from '../constants/layout'

interface YichenMainContainerProps {
  currentPanel: 'Mia' | 'Yichen'
  setCurrentPanel: (panel: 'Mia' | 'Yichen') => void
}

export default function YichenMainContainer({
  currentPanel,
  setCurrentPanel,
}: YichenMainContainerProps) {
  const { t } = useTranslation()
  
  return (
    <Box
      marginTop={LAYOUT.CONTENT_MARGIN_TOP}
      width={LAYOUT.CONTENT_WIDTH}
      boxShadow="md"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        direction={'row'}
        gap={LAYOUT.SECTION_GAP}
        data-component="Yichen-Content"
        width={LAYOUT.CONTENT_WIDTH}
        height={LAYOUT.HEADER_HEIGHT}
        boxShadow="md"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          width={LAYOUT.FULL_WIDTH}
          height="100%"
          transitionDuration="0.5s"
          bgColor={currentPanel === 'Mia' ? 'black' : 'white'}
          alignContent={'center'}
          justifyContent={'center'}
          onClick={() => setCurrentPanel('Mia')}
          cursor="pointer"
          boxShadow={
            currentPanel === 'Mia'
              ? 'inset 0 3px 6px rgba(255,255,255,0.3)'
              : 'none'
          }
        >
          <Heading
            as="h1"
            size="6xl"
            textAlign="center"
            color={currentPanel === 'Mia' ? 'white' : 'black'}
          >
            {t('titles.mia')}
          </Heading>
        </Box>
        <Box
          width={LAYOUT.FULL_WIDTH}
          height="100%"
          transitionDuration="0.5s"
          bgColor={currentPanel === 'Yichen' ? 'black' : 'white'}
          alignContent={'center'}
          justifyContent={'center'}
          onClick={() => setCurrentPanel('Yichen')}
          cursor="pointer"
          boxShadow={
            currentPanel === 'Yichen'
              ? 'inset 0 3px 6px rgba(255,255,255,0.3)'
              : 'none'
          }
        >
          <Heading
            as="h1"
            size="6xl"
            textAlign="center"
            color={currentPanel === 'Yichen' ? 'white' : 'black'}
          >
            {t('titles.yichen')}
          </Heading>
        </Box>
      </Flex>
      {/* Display the current panel */}
      {currentPanel === 'Yichen' ? (
        <Box
          bgColor="gray.200"
          width={LAYOUT.FULL_WIDTH}
          transitionDuration="0.6s"
          minHeight="200px"
        >
          {/* Yichen's content will be displayed here */}
        </Box>
      ) : (
        <Box
          bgColor="gray.200"
          width={LAYOUT.FULL_WIDTH}
          transitionDuration="0.6s"
          minHeight="200px"
        ></Box>
      )}
    </Box>
  )
}

