export interface DrawerItem {
  title: string;
  to: string;
  icon: string;
}

export interface HeaderBtnItem {
  title: string;
  to: string;
  accent?: boolean;
}

export default {
  company: 'リーフエイジ合同会社',
  titleTemplate: (chunk: string) =>
    chunk ? `${chunk} | リーフエイジ合同会社` : 'リーフエイジ合同会社',
  url: 'https://leafage.co.jp',
  keywords: [
    'Web受託開発',
    'ネイティブアプリ開発',
    'サイト制作',
    'モバイルサイト制作',
  ],
  drawerItems: [
    { title: 'TOP', to: '/', icon: 'home' },
    { title: '会社概要', to: '/company', icon: 'business' },
    { title: 'ニュース', to: '/news', icon: 'notes' },
    // { title: 'ソリューション', to: '/business' },
    { title: 'お問い合わせ', to: '/contact', icon: 'email' },
  ] as DrawerItem[],
  headerBtnItems: [
    { title: '会社概要', to: '/company' },
    { title: 'ニュース', to: '/news' },
    // { title: 'ソリューション', to: '/business' },
    { title: 'お問い合わせ', to: '/contact', accent: true },
  ] as HeaderBtnItem[],
};
