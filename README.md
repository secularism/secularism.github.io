# secularism.github.io

单页个人主页静态骨架，适合直接部署到 GitHub Pages。

## 当前能力

- 单页锚点导航
- 暗色 / 浅色主题切换
- 项目、技术栈、联系方式 mock 数据
- 为滚动动画、卡片翻转等后续增强预留 `data-animate` / `data-motion` 挂点

## 开发说明

- 页面入口：`index.html`
- 样式文件：`styles/site.css`
- 数据与交互：`scripts/`
- 逻辑测试：`tests/`

## 本地验证

运行：

```bash
node --test
```

## 部署

这是一个静态站点仓库，可以直接将根目录内容部署到 GitHub Pages。
