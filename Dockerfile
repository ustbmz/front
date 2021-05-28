## 打包使用的node版本
FROM node:lts-alpine as build-stage
## auth
LABEL maintainer="cnmz@msn.com"
## 创建工作目录
WORKDIR /app
## 复制项目文件至镜像目录
COPY . .
## 构建项目  

RUN npm install
## RUN yarn install --registry https://registry.npm.taobao.org
COPY . .
RUN npm run build

## 打包环节结束
# production stage
## 发布资源
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]