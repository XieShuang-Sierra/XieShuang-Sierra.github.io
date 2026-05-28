# 谢双 · 个人作品集网站

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

## 部署到 Vercel

### 1. 推送到 GitHub

```bash
git init
git add .
git commit -m "feat: 个人作品集网站"
git branch -M main
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```

### 2. 连接 Vercel

1. 登录 [https://vercel.com](https://vercel.com)。
2. **Add New Project** → 导入上述 GitHub 仓库。
3. Framework Preset 选择 **Vite**（通常会自动识别）。
4. 若更换了收件邮箱，可在 Vercel 添加 `VITE_FORM_ENDPOINT`（一般不需要）。
5. 点击 **Deploy**，完成后获得 `https://项目名.vercel.app` 链接。

### 3. 自定义域名（可选）

在 Vercel 项目 **Settings → Domains** 中添加你的域名并按提示配置 DNS。

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
