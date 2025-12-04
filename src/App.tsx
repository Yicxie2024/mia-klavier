import { Box, Container, Heading, Text, Stack, Link } from '@chakra-ui/react'

export default function App() {
  return (
    <Container maxW="900px" py={16} px={4} data-component="App-Container">
      <Stack gap={6} data-component="App-Stack">
        {/* Header Section */}
        <Box as="header" mb={6} data-component="Header">
          <Heading as="h1" size="2xl" mb={3} data-component="Title">
            Hi, we are Mia and Yichen!
          </Heading>
          <Text color="gray.600" lineHeight={1.6} data-component="Subtitle">
            Master's student @ TU Darmstadt · Uncertainty-guided reasoning · LLM safety
          </Text>
        </Box>

        {/* Projects Section */}
        <Box 
          border="1px solid" 
          borderColor="gray.200" 
          borderRadius="16px" 
          p={5} 
          mb={4}
          data-component="Projects-Section"
        >
          <Heading as="h2" size="lg" mb={4} data-component="Projects-Title">
            Projects
          </Heading>
          <Box as="ul" lineHeight={1.9} pl={5} m={0} data-component="Projects-List">
            <Box as="li" mb={2} data-component="Project-Item-1">
              UQ-guided SMART-style correction (thesis)
            </Box>
            <Box as="li" mb={2} data-component="Project-Item-2">
              Step-wise uncertainty pattern analysis
            </Box>
            <Box as="li" data-component="Project-Item-3">…</Box>
          </Box>
        </Box>

        {/* Contact Section */}
        <Box 
          border="1px solid" 
          borderColor="gray.200" 
          borderRadius="16px" 
          p={5}
          data-component="Contact-Section"
        >
          <Heading as="h2" size="lg" mb={4} data-component="Contact-Title">
            Contact
          </Heading>
          <Text lineHeight={1.8} data-component="Contact-Text">
            Email: <Link href="mailto:your@email.com" color="blue.500" data-component="Email-Link">your@email.com</Link> ·{' '}
            <Link 
              href="https://github.com/yourname" 
              target="_blank" 
              rel="noreferrer" 
              color="blue.500"
              data-component="GitHub-Link"
            >
              GitHub
            </Link>
          </Text>
        </Box>
      </Stack>
    </Container>
  )
}
