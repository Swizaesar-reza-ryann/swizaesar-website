import { NavbarListType } from './types';

export const CONTACT_LINK = 'https://wa.me/6282258526357';

export const NAVBAR_LIST: NavbarListType[] = [
  {
    label: 'Home',
    link: '/',
    key: 'home',
  },
  {
    label: 'About',
    link: '/about',
    key: 'about',
  },
  {
    label: 'Experience',
    link: '/experience',
    key: 'experience',
  },
  {
    label: 'Portfolio',
    link: '/portfolio',
    key: 'portfolio',
  },
  {
    label: 'Contact',
    link: CONTACT_LINK,
    key: 'contact',
  },
];
