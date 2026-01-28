// config.js
export const config = {
  siteTitle: "星霜の项目集",
  siteSubtitle: "实验 · 工具 · 玩具 · 以及一些深夜的灵感",

  githubUsername: "xiaobaiweinuli",

  copyrightStartYear: "2025",

  // 站点说明区域开关 + 内容
  siteInfo: {
    enabled: false,  // ← 改成 false 即可完全关闭说明区域（不占位）
    title: "关于这个页面",
    paragraphs: [
      "这里收集了我近年来折腾的一些小项目，大部分是工具、实验性质的玩具，或者半夜突发奇想搞出来的东西。",
      "你可以直接点击卡片中的链接访问。如果某个链接打不开或功能异常，欢迎通过 GitHub 提 issue，或者在我的频道留言告诉我。"
    ]
  },

  projects: [
    {
      title: "AI生成GitHub主页",
      url: "https://myedge.loushi.ccwu.cc",
      display: "myedge.loushi.ccwu.cc",
      description: "使用 AI 自动生成个性化 GitHub 个人主页"
    },
    {
      title: "赛博占卜",
      url: "https://cyber-fortune.loushi.ccwu.cc/",
      display: "cyber-fortune",
      description: "深夜随机生成赛博风格运势"
    },
    {
      title: "夸夸墙",
      url: "https://first-praise-wall.loushi.ccwu.cc",
      display: "first-praise-wall",
      description: "收集全世界对你的夸夸留言"
    }
  ]
};
