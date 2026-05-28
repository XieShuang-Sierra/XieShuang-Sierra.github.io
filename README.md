# 个人作品集网站

基于 Vite + React + TypeScript + Tailwind CSS 的单页作品集，用于展示简历信息与联系互动。

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

浏览器打开终端提示的地址（通常为 `http://localhost:5173`）。

## 构建

```bash
npm run build
npm run preview   # 本地预览生产构建
```

## 配置留言表单（FormSubmit，无需注册）

本站默认使用 [FormSubmit](https://formsubmit.co)，**不需要**像 Formspree 那样注册账号。访客提交留言后，邮件会发到 `src/config/site.ts` 里配置的邮箱。

### 首次使用前（只需做一次）

1. 本地运行 `npm run dev`，在「联系我」表单里**自己提交一条测试留言**。
2. 打开邮箱 `xieshuang24@mails.ucas.ac.cn`，查收 FormSubmit 发来的**激活邮件**（可能在垃圾箱）。
3. 点击邮件中的确认链接。之后他人提交的留言会自动转发到你的邮箱。

若收不到激活邮件，可直接用页面上的邮箱联系，不影响网站其他功能。

### 更换收件邮箱（可选）

编辑 `src/config/site.ts` 中的 `contactEmail`，或设置环境变量：

```
VITE_FORM_ENDPOINT=https://formsubmit.co/ajax/你的新邮箱@example.com
```

> 请勿在留言中填写密码等敏感信息。

## 更新社交链接（可选）

编辑 [`src/config/site.ts`](src/config/site.ts) 中的 `social`，填写 GitHub、LinkedIn 等链接；留空则不显示该区块。

## 更新简历内容

文案集中在 [`src/data/resume.ts`](src/data/resume.ts)，修改后无需改动组件。

## 部署到 GitHub Pages（免费，推荐）

**线上地址：** https://xieshuang-sierra.github.io/

仓库须命名为 `XieShuang-Sierra.github.io`（与 GitHub 用户名一致）。推送 `main` 后 Actions 自动发布。

### 首次开启 Pages（只需做一次）

1. 打开仓库 **Settings** → **Pages**
2. **Source** 选 **GitHub Actions**
3. 到 **Actions** 等 “Deploy to GitHub Pages” 跑绿

### 更新网站

```bash
git add .
git commit -m "更新说明"
git push
```

## 部署到 Vercel（可选）

若曾部署 Vercel，可停用；以 GitHub Pages 为准即可。

## 项目结构

```
public/           # 静态资源
src/
  components/     # 页面区块组件
  config/site.ts  # 联系方式、表单、社交链接
  data/resume.ts  # 结构化简历数据
```

## 技术栈

- [Vite](https://vitejs.dev/)
- [React 19](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [FormSubmit](https://formsubmit.co/)（留言表单，无需注册账号）
