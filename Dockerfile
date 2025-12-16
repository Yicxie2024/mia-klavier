# 多阶段构建：构建阶段
# 使用 Docker Hub 官方 Node.js 镜像（Alpine 版本，体积小）
FROM node:22-alpine AS builder

WORKDIR /app

# 复制 package 文件
COPY package*.json ./

# 安装依赖
RUN npm ci

# 复制源代码
COPY . .

# 构建应用（Docker 部署使用根路径，而不是 /mia-klavier/）
RUN npm run build -- --base /

# 生产阶段：使用 Nginx 提供静态文件
# 使用 Docker Hub 官方 Nginx 镜像（Alpine 版本，体积小）
FROM nginx:alpine

# 复制构建产物到 Nginx（使用根路径，所以直接放在 html 目录）
COPY --from=builder /app/dist /usr/share/nginx/html

# 复制 Nginx 配置文件（如果需要自定义配置）
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
