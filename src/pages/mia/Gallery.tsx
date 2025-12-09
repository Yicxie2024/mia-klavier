import { useState } from 'react'
import { Box, Heading, HStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import MiaNavigation from '../../components/MiaNavigation'
import GalleryGrid from '../../components/GalleryGrid'
import { LAYOUT } from '../../constants/layout'
import galleryBg from '../../assets/images/gallery_bg.jpg'

// 示例数据 - 你可以替换为实际的数据源
type GalleryItem = {
  id: string
  type: 'image' | 'video'
  src: string
  alt?: string
  thumbnail?: string
}

const initialItems: GalleryItem[] = [
  { id: '1', type: 'image', src: '/images/example1.jpg', alt: 'Gallery image 1' },
  { id: '2', type: 'video', src: '/videos/example1.mp4', thumbnail: '/images/video-thumb1.jpg' },
  { id: '3', type: 'image', src: '/images/example2.jpg', alt: 'Gallery image 2' },
  { id: '4', type: 'image', src: '/images/example3.jpg', alt: 'Gallery image 3' },
  { id: '5', type: 'video', src: '/videos/example2.mp4', thumbnail: '/images/video-thumb2.jpg' },
  { id: '6', type: 'image', src: '/images/example4.jpg', alt: 'Gallery image 4' },
  { id: '7', type: 'image', src: '/images/example5.jpg', alt: 'Gallery image 5' },
  { id: '8', type: 'video', src: '/videos/example3.mp4', thumbnail: '/images/video-thumb3.jpg' },
  { id: '9', type: 'image', src: '/images/example6.jpg', alt: 'Gallery image 6' },
  { id: '10', type: 'image', src: '/images/example7.jpg', alt: 'Gallery image 7' },
  { id: '11', type: 'image', src: '/images/example8.jpg', alt: 'Gallery image 8' },
  { id: '12', type: 'video', src: '/videos/example4.mp4', thumbnail: '/images/video-thumb4.jpg' },
  { id: '13', type: 'image', src: '/images/example9.jpg', alt: 'Gallery image 9' },
  { id: '14', type: 'image', src: '/images/example10.jpg', alt: 'Gallery image 10' },
  { id: '15', type: 'video', src: '/videos/example5.mp4', thumbnail: '/images/video-thumb5.jpg' },
  { id: '16', type: 'image', src: '/images/example11.jpg', alt: 'Gallery image 11' },
  { id: '17', type: 'image', src: '/images/example12.jpg', alt: 'Gallery image 12' },
  { id: '18', type: 'image', src: '/images/example13.jpg', alt: 'Gallery image 13' },
  { id: '19', type: 'video', src: '/videos/example6.mp4', thumbnail: '/images/video-thumb6.jpg' },
  { id: '20', type: 'image', src: '/images/example14.jpg', alt: 'Gallery image 14' },
  { id: '21', type: 'image', src: '/images/example15.jpg', alt: 'Gallery image 15' },
  { id: '22', type: 'image', src: '/images/example16.jpg', alt: 'Gallery image 16' },
  { id: '23', type: 'video', src: '/videos/example7.mp4', thumbnail: '/images/video-thumb7.jpg' },
  { id: '24', type: 'image', src: '/images/example17.jpg', alt: 'Gallery image 17' },
  { id: '25', type: 'image', src: '/images/example18.jpg', alt: 'Gallery image 18' },
]

export default function Gallery() {
  const { t } = useTranslation()
  const [items, setItems] = useState<GalleryItem[]>(initialItems)
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const loadMore = () => {
    if (isLoading || !hasMore) return

    setIsLoading(true)
    // 模拟加载更多数据
    setTimeout(() => {
      const newItems: GalleryItem[] = Array.from({ length: 6 }, (_, i) => {
        const isVideo = i % 3 === 0
        return {
          id: `${items.length + i + 1}`,
          type: (isVideo ? 'video' : 'image') as 'image' | 'video',
          src: isVideo
            ? `/videos/example${items.length + i + 1}.mp4`
            : `/images/example${items.length + i + 1}.jpg`,
          ...(isVideo
            ? { thumbnail: `/images/video-thumb${items.length + i + 1}.jpg` }
            : { alt: `Gallery item ${items.length + i + 1}` }),
        }
      })
      setItems([...items, ...newItems])
      setIsLoading(false)
      // 假设最多加载 30 个项目
      if (items.length + newItems.length >= 30) {
        setHasMore(false)
      }
    }, 1000)
  }

  return (
    <Box
      w={LAYOUT.FULL_WIDTH}
      px={LAYOUT.CONTAINER_PADDING}
      py={LAYOUT.CONTAINER_PADDING}
      minH="100vh"
      style={{
        backgroundImage: `url(${galleryBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 100%',
        backgroundPosition: 'center center',
      }}
      bgColor="gray.200"
    >
      <HStack data-component="Gallery-Stack" justifyContent="center" alignItems="flex-start">
        {/* Navigation section */}
        <MiaNavigation />

        {/* Gallery content */}
        <Box width="50%" marginTop={LAYOUT.NAVIGATION_MARGIN_TOP} mx="auto">
          <Heading as="h1" size="2xl" mb={4} textAlign="center" color="white">
            {t('nav.gallery')}
          </Heading>
          <GalleryGrid
            items={items}
            onLoadMore={loadMore}
            hasMore={hasMore}
            isLoading={isLoading}
          />
        </Box>
      </HStack>
    </Box>
  )
}
