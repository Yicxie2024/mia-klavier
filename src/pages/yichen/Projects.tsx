import { Box, Heading, Text, HStack } from '@chakra-ui/react'
import YichenNavigation from '../../components/YichenNavigation'
import { LAYOUT } from '../../constants/layout'

export default function YichenProjects() {
  return (
    <Box
      w={LAYOUT.FULL_WIDTH}
      px={LAYOUT.CONTAINER_PADDING}
      py={LAYOUT.CONTAINER_PADDING}
      bgColor="gray.200"
    >
      <HStack data-component="YichenProjects-Stack" justifyContent="left" alignItems="flex-start">
        <YichenNavigation />
        <Box width={LAYOUT.CONTENT_WIDTH} marginTop={LAYOUT.NAVIGATION_MARGIN_TOP}>
          <Heading as="h1" size="2xl" mb={4}>
            Projects
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Projects content will be displayed here.
          </Text>
        </Box>
      </HStack>
    </Box>
  )
}

