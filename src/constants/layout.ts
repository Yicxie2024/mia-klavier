/**
 * 布局常量文件
 * 使用 TypeScript 常量统一管理页面尺寸
 *
 * 使用方式：
 * import { LAYOUT } from './constants/layout'
 * <Box height={LAYOUT.HEADER_HEIGHT} />
 */

export const LAYOUT = {
  // 宽度
  NAVIGATION_WIDTH: '10%',
  CONTENT_WIDTH: '100%',
  FULL_WIDTH: '100%',

  // 高度
  HEADER_HEIGHT: '10vh', // 顶部标题栏高度
  // CONTENT_HEIGHT: '84vh', // 已移除：内容区域高度现在由图片自适应决定
  FULL_HEIGHT: '100vh',
  MIN_FULL_HEIGHT: '100vh',

  // 间距（Chakra UI spacing units）
  CONTAINER_PADDING: 4, // 16px
  SECTION_GAP: 4,
  NAVIGATION_GAP: 2,

  // 边距
  CONTENT_MARGIN_TOP: -7,
  NAVIGATION_MARGIN_TOP: 10,
} as const

// 类型导出
export type LayoutConfig = typeof LAYOUT
