import { useState } from 'react'
import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Input,
  Textarea,
  Button,
  Image,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import MiaNavigation from '../../components/MiaNavigation'
import { LAYOUT } from '../../constants/layout'

export default function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: 实现邮件发送逻辑
    // 可以使用 EmailJS、后端 API 或其他邮件服务
    console.log('Form submitted:', formData)

    // 示例：使用 EmailJS（需要先安装和配置）
    // import emailjs from '@emailjs/browser'
    // try {
    //   await emailjs.send(
    //     'YOUR_SERVICE_ID',
    //     'YOUR_TEMPLATE_ID',
    //     {
    //       from_name: formData.name,
    //       from_email: formData.email,
    //       inquiry_type: formData.inquiryType,
    //       message: formData.message,
    //     },
    //     'YOUR_PUBLIC_KEY'
    //   )
    //   alert('Message sent successfully!')
    // } catch (error) {
    //   console.error('Failed to send email:', error)
    //   alert('Failed to send message. Please try again.')
    // }

    // 重置表单
    setFormData({
      name: '',
      email: '',
      inquiryType: '',
      message: '',
    })
  }

  return (
    <Box
      w={LAYOUT.FULL_WIDTH}
      px={LAYOUT.CONTAINER_PADDING}
      py={LAYOUT.CONTAINER_PADDING}
      bgColor="gray.200"
      minH="100vh"
    >
      <HStack data-component="Contact-Stack" justifyContent="left" alignItems="flex-start">
        {/* Navigation section */}
        <MiaNavigation />

        {/* Contact content */}
        <Box width={LAYOUT.CONTENT_WIDTH} marginTop={LAYOUT.NAVIGATION_MARGIN_TOP}>
          <Heading as="h1" size="2xl" mb={6}>
            {t('nav.contact')}
          </Heading>

          <HStack alignItems="flex-start" gap={8}>
            {/* Left: Contact Information Panel */}
            <Box width="40%" bg="white" p={6} borderRadius="md" boxShadow="md">
              <Heading as="h2" size="lg" mb={4}>
                {t('contact.info.title', 'Contact Information')}
              </Heading>
              <VStack alignItems="flex-start" gap={4}>
                <Box>
                  <Text fontWeight="bold" mb={2}>
                    {t('contact.info.name', 'Name')}
                  </Text>
                  <Text color="gray.600">Mia</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold" mb={2}>
                    {t('contact.info.email', 'Email')}
                  </Text>
                  <Text color="gray.600">mia@example.com</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold" mb={2}>
                    {t('contact.info.phone', 'Phone')}
                  </Text>
                  <Text color="gray.600">+49 123 456 789</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold" mb={2}>
                    {t('contact.info.whatsapp', 'WhatsApp')}
                  </Text>
                  <Box
                    bg="white"
                    p={2}
                    borderRadius="md"
                    border="1px solid"
                    borderColor="gray.300"
                    display="inline-block"
                  >
                    <Image
                      src="/images/whatsapp-qr.png"
                      alt="WhatsApp QR Code"
                      width="120px"
                      height="120px"
                      onError={e => {
                        const target = e.target as HTMLImageElement
                        target.src = 'https://via.placeholder.com/120x120?text=QR+Code'
                      }}
                    />
                  </Box>
                </Box>
              </VStack>
            </Box>

            {/* Right: Contact Form */}
            <Box width="60%" bg="white" p={6} borderRadius="md" boxShadow="md">
              <Heading as="h2" size="lg" mb={4}>
                {t('contact.form.title', 'Send a Message')}
              </Heading>
              <form onSubmit={handleSubmit}>
                <VStack gap={4} alignItems="stretch">
                  <Box>
                    <Text as="label" display="block" mb={2} fontWeight="medium">
                      {t('contact.form.name', 'Name')}{' '}
                      <Text as="span" color="red.500">
                        *
                      </Text>
                    </Text>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact.form.namePlaceholder', 'Enter your name')}
                      bg="white"
                      borderColor="gray.300"
                      required
                    />
                  </Box>

                  <Box>
                    <Text as="label" display="block" mb={2} fontWeight="medium">
                      {t('contact.form.email', 'Email')}{' '}
                      <Text as="span" color="red.500">
                        *
                      </Text>
                    </Text>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contact.form.emailPlaceholder', 'Enter your email')}
                      bg="white"
                      borderColor="gray.300"
                      required
                    />
                  </Box>

                  <Box>
                    <Text as="label" display="block" mb={2} fontWeight="medium">
                      {t('contact.form.inquiryType', 'Inquiry Type')}{' '}
                      <Text as="span" color="red.500">
                        *
                      </Text>
                    </Text>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        backgroundColor: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '4px',
                        fontSize: '14px',
                      }}
                    >
                      <option value="">
                        {t('contact.form.selectInquiry', 'Select an option')}
                      </option>
                      <option value="trial">{t('contact.form.trialLesson', '我想预约试课')}</option>
                      <option value="consultation">
                        {t('contact.form.consultation', '我想咨询')}
                      </option>
                    </select>
                  </Box>

                  <Box>
                    <Text as="label" display="block" mb={2} fontWeight="medium">
                      {t('contact.form.message', 'Message')}
                    </Text>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t(
                        'contact.form.messagePlaceholder',
                        'Enter your message (optional)'
                      )}
                      rows={6}
                      bg="white"
                      borderColor="gray.300"
                      resize="vertical"
                    />
                  </Box>

                  <Button
                    type="submit"
                    colorScheme="black"
                    bg="black"
                    color="white"
                    size="lg"
                    width="100%"
                    mt={2}
                    _hover={{ bg: 'gray.800' }}
                  >
                    {t('contact.form.send', 'Send Message')}
                  </Button>
                </VStack>
              </form>
            </Box>
          </HStack>
        </Box>
      </HStack>
    </Box>
  )
}
