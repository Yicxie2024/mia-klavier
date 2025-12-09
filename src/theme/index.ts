import { createSystem, defaultConfig } from '@chakra-ui/react'
import { pageSizes } from './sizes'

/**
 * 自定义 Chakra UI 主题配置
 * 可以扩展默认配置，添加自定义的 tokens
 */
export const customTheme = createSystem(defaultConfig, {
  theme: {
    // 可以在这里扩展 tokens
    // 例如：colors, sizes, spacing 等
  },
})

// 导出尺寸配置供组件使用
export { pageSizes }

