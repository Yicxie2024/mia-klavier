# Public Images Directory

这个目录用于存放静态图片资源，这些图片会被直接复制到构建输出目录，不会被处理。

## 使用场景

- Favicon
- 在 HTML 中直接引用的图片
- 非常大的图片文件
- 需要通过固定 URL 访问的图片

## 使用方式

```typescript
// 注意：你的 base 配置是 "/mia-klavier/"
// 所以引用路径是：/mia-klavier/images/photo.jpg
<img src="/mia-klavier/images/photo.jpg" alt="Photo" />
```

## 注意事项

- 图片不会被 Vite 处理或优化
- 路径固定，不会添加哈希
- 所有文件都会被复制到构建输出目录

