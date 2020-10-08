module.exports = {
  company: 'リーフエイジ合同会社',
  titleTemplate: (chunk) =>
    chunk ? `${chunk} | リーフエイジ合同会社` : 'リーフエイジ合同会社',
  url: 'https://leafage.co.jp',
  keywords: ['Web制作', 'LP制作', '広告運用'],
  drawerItems: [
    { title: 'TOP', to: '/', icon: 'home' },
    { title: '会社概要', to: '/company', icon: 'business' },
    { title: '最新情報', to: '/news', icon: 'notes' },
    // { title: 'ソリューション', to: '/business' },
    { title: 'お問い合わせ', to: '/contact', icon: 'email' },
  ],
  headerBtnItems: [
    { title: '会社概要', to: '/company' },
    { title: '最新情報', to: '/news' },
    // { title: 'ソリューション', to: '/business' },
    { title: 'お問い合わせ', to: '/contact', accent: true },
  ],
};
