import { useState } from 'react'
import { Box, HStack } from '@chakra-ui/react'
import MiaNavigation from '../components/MiaNavigation'
import YichenNavigation from '../components/YichenNavigation'
import MiaMainContainer from '../components/MiaMainContainer'
import YichenMainContainer from '../components/YichenMainContainer'
import { LAYOUT } from '../constants/layout'

export default function Home() {
  const [currentPanel, setCurrentPanel] = useState<'Mia' | 'Yichen'>('Mia')
  return (
    <Box
      w={LAYOUT.FULL_WIDTH}
      px={LAYOUT.CONTAINER_PADDING}
      py={LAYOUT.CONTAINER_PADDING}
      data-component="App-Container"
      alignItems="center"
      bgColor="gray.200"
    >
      <HStack data-component="App-Stack" justifyContent="left" alignItems="flex-start">
        {/* Navigation section - show different navigation based on currentPanel */}
        {currentPanel === 'Mia' ? (
          <MiaNavigation currentPanel={currentPanel} />
        ) : (
          <YichenNavigation />
        )}

        {/* Content section - show different container based on currentPanel */}
        {currentPanel === 'Mia' ? (
          <MiaMainContainer currentPanel={currentPanel} setCurrentPanel={setCurrentPanel} />
        ) : (
          <YichenMainContainer currentPanel={currentPanel} setCurrentPanel={setCurrentPanel} />
        )}
      </HStack>
    </Box>
  )
}
