const contactEmail = 'xieshuang24@mails.ucas.ac.cn'

export const siteConfig = {
  name: '谢双',
  title: '谢双 | 个人作品集',
  email: contactEmail,
  avatar: '/avatar.jpg',
  /**
   * FormSubmit — 无需注册账号，留言会发到上方邮箱。
   * 首次提交后请查收激活邮件并点击确认链接。
   * 也可用环境变量 VITE_FORM_ENDPOINT 覆盖完整地址。
   */
  formEndpoint:
    import.meta.env.VITE_FORM_ENDPOINT ??
    `https://formsubmit.co/ajax/${encodeURIComponent(contactEmail)}`,
  social: {
    github: '',
    linkedin: '',
  },
} as const

export const navItems = [
  { id: 'about', label: '关于' },
  { id: 'education', label: '教育' },
  { id: 'experience', label: '经历' },
  { id: 'skills', label: '优势' },
  { id: 'contact', label: '联系' },
] as const
