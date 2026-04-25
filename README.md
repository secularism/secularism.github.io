# secularism.github.io

一个使用 Tailwind CSS 重构的单页个人主页，适合直接部署到 GitHub Pages。

## 当前能力

- 单页锚点导航
- 深浅主题切换
- Tailwind CSS + daisyUI 基础组件
- 响应式适配
- 轻量 hover / scroll / background motion

## 开发说明

- 页面入口：`index.html`
- Tailwind 源文件：`src/tailwind.css`
- 生成样式：`assets/app.css`
- 交互逻辑：`scripts/`
- 逻辑测试：`tests/`

## 本地验证

构建样式：

```bash
npm run build:css
```

运行测试：

```bash
node --test
```

## 部署

这是一个静态站点仓库，可以直接将根目录内容部署到 GitHub Pages。
