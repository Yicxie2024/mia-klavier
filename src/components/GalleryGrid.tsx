import { useState, useEffect } from 'react'
import { Box, Image, VStack, HStack, Spinner, Text } from '@chakra-ui/react'
import { LAYOUT } from '../constants/layout'

interface GalleryItem {
  id: string
  type: 'image' | 'video'
  src: string
  alt?: string
  thumbnail?: string
}

interface GalleryGridProps {
  items: GalleryItem[]
  onLoadMore?: () => void
  hasMore?: boolean
  isLoading?: boolean
}

export default function GalleryGrid({ items, onLoadMore, hasMore = false, isLoading = false }: GalleryGridProps) {
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!containerRef || !onLoadMore || !hasMore || isLoading) return

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = containerRef
      // 当滚动到距离底部 200px 时加载更多
      if (scrollHeight - scrollTop - clientHeight < 200) {
        onLoadMore()
      }
    }

    containerRef.addEventListener('scroll', handleScroll)
    return () => containerRef.removeEventListener('scroll', handleScroll)
  }, [containerRef, onLoadMore, hasMore, isLoading])

  return (
    <Box
      ref={setContainerRef}
      width="100%"
      height="80vh"
      overflowY="auto"
      overflowX="hidden"
      css={{
        '&::-webkit-scrollbar': {
          width: '8px',
        },
        '&::-webkit-scrollbar-track': {
          background: '#f1f1f1',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#888',
          borderRadius: '4px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: '#555',
        },
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        gap={4}
        width="100%"
      >
        {items.map((item, index) => {
          // 一宽一窄交错：偶数索引宽，奇数索引窄
          const isWide = index % 2 === 0
          return (
            <Box
              key={item.id}
              position="relative"
              overflow="hidden"
              borderRadius="md"
              boxShadow="md"
              transition="transform 0.3s ease, box-shadow 0.3s ease"
              _hover={{
                transform: 'scale(1.02)',
                boxShadow: 'lg',
              }}
              cursor="pointer"
              width={isWide ? '70%' : '50%'}
              alignSelf={isWide ? 'flex-start' : 'flex-end'}
            >
            {item.type === 'image' ? (
              <Image
                src={item.src}
                alt={item.alt || `Gallery image ${item.id}`}
                width="100%"
                height="auto"
                objectFit="cover"
                display="block"
                loading="lazy"
              />
            ) : (
              <Box
                as="video"
                src={item.src}
                width="100%"
                height="auto"
                controls
                preload="metadata"
                poster={item.thumbnail}
                style={{
                  display: 'block',
                }}
              />
            )}
            </Box>
          )
        })}
      </Box>
      {isLoading && (
        <HStack justifyContent="center" py={8}>
          <Spinner size="lg" color="black" />
          <Text>Loading more...</Text>
        </HStack>
      )}
      {!hasMore && items.length > 0 && (
        <Text textAlign="center" py={4} color="gray.500">
          No more items to load
        </Text>
      )}
    </Box>
  )
}

