# Images Directory

这个目录用于存放需要在 React 组件中导入使用的图片资源。

## 使用方式

```typescript
import miaImage from './assets/images/mia-klavier.jpg'
import yichenImage from './assets/images/yichen-nlp.jpg'

// 在组件中使用
<Box
  bgImage={`url(${miaImage})`}
  bgSize="cover"
  bgPosition="center"
>
  内容
</Box>
```

## 支持的格式

- `.jpg`, `.jpeg`
- `.png`
- `.svg`
- `.gif`
- `.webp`

## 注意事项

- 图片会被 Vite 处理和优化
- 文件名会添加内容哈希，便于浏览器缓存
- 未使用的图片不会被打包（tree-shaking）
