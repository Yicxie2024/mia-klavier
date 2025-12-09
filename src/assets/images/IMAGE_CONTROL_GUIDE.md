# 图片尺寸控制指南

## 方法一：背景图片（bgImage）- 推荐用于全屏背景

### 当前使用方式

```tsx
<Box
  bgImage={`url(${miaBackground})`}
  bgSize="cover"
  backgroundPosition="center"
  backgroundRepeat="no-repeat"
>
```

### bgSize 选项详解：

1. **`cover`** (当前使用)
   - 图片覆盖整个容器，可能裁剪部分内容
   - 保持宽高比
   - 适合：全屏背景

   ```tsx
   bgSize = 'cover'
   ```

2. **`contain`**
   - 图片完整显示在容器内，可能有空白
   - 保持宽高比
   - 适合：确保图片完整可见

   ```tsx
   bgSize = 'contain'
   ```

3. **`auto`**
   - 使用图片原始尺寸

   ```tsx
   bgSize = 'auto'
   ```

4. **百分比值**
   - 相对容器的百分比

   ```tsx
   bgSize = '100%' // 宽度和高度都 100%
   bgSize = '80% 60%' // 宽度 80%，高度 60%
   ```

5. **具体像素值**
   - 指定具体宽度和高度
   ```tsx
   bgSize = '800px 600px' // 宽度 800px，高度 600px
   bgSize = '1200px auto' // 宽度 1200px，高度自适应
   ```

### backgroundPosition 选项：

```tsx
backgroundPosition = 'center' // 居中（默认）
backgroundPosition = 'top' // 顶部居中
backgroundPosition = 'bottom' // 底部居中
backgroundPosition = 'left' // 左侧居中
backgroundPosition = 'right' // 右侧居中
backgroundPosition = 'top left' // 左上角
backgroundPosition = '50% 30%' // 自定义位置
```

### backgroundRepeat 选项：

```tsx
backgroundRepeat = 'no-repeat' // 不重复（推荐）
backgroundRepeat = 'repeat' // 水平和垂直都重复
backgroundRepeat = 'repeat-x' // 只水平重复
backgroundRepeat = 'repeat-y' // 只垂直重复
```

---

## 方法二：使用 <img> 标签（推荐用于内容图片）

如果你需要使用 `<img>` 标签而不是背景图片：

```tsx
import { Image } from '@chakra-ui/react'
import miaBackground from './assets/images/mia_bg4.JPG'

;<Image
  src={miaBackground}
  alt="Mia's Klavier Studio"
  // 尺寸控制选项
  width="100%" // 宽度
  height="100vh" // 高度
  maxWidth="1200px" // 最大宽度
  maxHeight="800px" // 最大高度
  minWidth="300px" // 最小宽度
  minHeight="200px" // 最小高度
  // 裁剪和适配方式
  objectFit="cover" // 类似 bgSize="cover"
  objectFit="contain" // 类似 bgSize="contain"
  objectFit="fill" // 填充整个容器（可能变形）
  objectFit="none" // 原始尺寸
  // 位置（配合 objectFit 使用）
  objectPosition="center"
  objectPosition="top left"
  objectPosition="50% 50%"
/>
```

---

## 方法三：使用 Box + Image 组合

结合 Box 容器和 Image 组件：

```tsx
<Box width="100%" height="100vh" position="relative" overflow="hidden">
  <Image
    src={miaBackground}
    alt="Background"
    width="100%"
    height="100%"
    objectFit="cover"
    objectPosition="center"
  />
  {/* 覆盖在图片上的内容 */}
  <Box position="absolute" top={0} left={0} zIndex={1}>
    <Text>内容</Text>
  </Box>
</Box>
```

---

## 实际应用示例

### 示例 1：全屏背景（当前使用）

```tsx
bgSize = 'cover'
backgroundPosition = 'center'
backgroundRepeat = 'no-repeat'
```

### 示例 2：图片完整显示，不裁剪

```tsx
bgSize = 'contain'
backgroundPosition = 'center'
backgroundRepeat = 'no-repeat'
```

### 示例 3：固定尺寸背景

```tsx
bgSize = '1200px 800px'
backgroundPosition = 'center'
backgroundRepeat = 'no-repeat'
```

### 示例 4：响应式背景（小屏幕显示更多内容）

```tsx
bgSize={["cover", "contain"]} // 小屏幕 cover，大屏幕 contain
backgroundPosition="center"
```

---

## 推荐的配置组合

### 全屏背景图片（推荐）

```tsx
bgSize = 'cover'
backgroundPosition = 'center'
backgroundRepeat = 'no-repeat'
```

### 确保图片完整显示

```tsx
bgSize = 'contain'
backgroundPosition = 'center'
backgroundRepeat = 'no-repeat'
```

### 固定比例背景

```tsx
bgSize = '100% auto' // 宽度填满，高度自适应
backgroundPosition = 'center top'
backgroundRepeat = 'no-repeat'
```


