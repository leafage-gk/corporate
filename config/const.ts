export interface DrawerItem {
  title: string;
  to: string;
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
    { title: 'TOP', to: '/' },
    { title: '会社概要', to: '/company' },
    { title: 'ニュース', to: '/press' },
    { title: 'ソリューション', to: '/business' },
    { title: 'お問い合わせ', to: '/contact' },
  ] as DrawerItem[],
  headerBtnItems: [
    { title: '会社概要', to: '/company' },
    { title: 'ニュース', to: '/press' },
    { title: 'ソリューション', to: '/business' },
    { title: 'お問い合わせ', to: '/contact', accent: true },
  ] as HeaderBtnItem[],
};
