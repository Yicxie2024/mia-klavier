/**
 * 页面尺寸配置
 * 统一管理页面和组件的宽度、高度
 */

export const pageSizes = {
  // 页面布局尺寸
  navigationWidth: '10%',
  contentWidth: '100%',
  
  // 高度尺寸
  headerHeight: '10vh',
  contentHeight: '84vh',
  fullHeight: '100vh',
  
  // 间距
  containerPadding: 4, // Chakra UI spacing unit (16px)
  sectionGap: 4,
  
  // 响应式断点（Chakra UI 默认值，可根据需要自定义）
  breakpoints: {
    sm: '30em',   // 480px
    md: '48em',   // 768px
    lg: '62em',   // 992px
    xl: '80em',   // 1280px
    '2xl': '96em', // 1536px
  },
} as const

// 导出类型
export type PageSizes = typeof pageSizes

