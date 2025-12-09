# 页面尺寸管理方案

本项目提供了多种统一管理页面宽高的方案，你可以根据项目需求选择合适的方式。

## 方案对比

### 1. **TypeScript 常量文件** (推荐用于当前项目)
- ✅ 类型安全
- ✅ IDE 自动补全
- ✅ 易于重构
- ✅ 适合 TypeScript 项目

**位置**: `src/constants/layout.ts`

**使用示例**:
```tsx
import { LAYOUT } from './constants/layout'

<Box 
  width={LAYOUT.NAVIGATION_WIDTH}
  height={LAYOUT.HEADER_HEIGHT}
  padding={LAYOUT.CONTAINER_PADDING}
/>
```

### 2. **CSS 变量** (CSS Custom Properties)
- ✅ 原生 CSS 支持
- ✅ 可以在运行时动态修改
- ✅ 适合纯 CSS 场景

**位置**: `src/styles/variables.css`

**使用示例**:
```tsx
// 在组件中
<Box 
  width="var(--navigation-width)"
  height="var(--header-height)"
/>

// 或在 CSS 文件中
.my-component {
  width: var(--navigation-width);
  height: var(--header-height);
}
```

### 3. **Chakra UI Theme**
- ✅ 与 Chakra UI 深度集成
- ✅ 支持响应式
- ✅ 可以使用 Chakra 的 token 系统

**位置**: `src/theme/`

**使用示例**:
```tsx
import { pageSizes } from './theme/sizes'

<Box 
  width={pageSizes.navigationWidth}
  height={pageSizes.headerHeight}
/>
```

## 推荐使用方式

对于当前项目，建议使用 **TypeScript 常量文件** (`src/constants/layout.ts`)，因为：
1. 项目已使用 TypeScript
2. 类型安全，减少错误
3. 易于维护和重构
4. IDE 支持好

## 迁移现有代码

将硬编码的尺寸值替换为常量：

**之前**:
```tsx
<Box width="10%" height="10vh" />
```

**之后**:
```tsx
import { LAYOUT } from './constants/layout'

<Box width={LAYOUT.NAVIGATION_WIDTH} height={LAYOUT.HEADER_HEIGHT} />
```

