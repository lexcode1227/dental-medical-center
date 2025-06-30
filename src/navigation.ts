import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'About',
      href: getPermalink('/about'),

    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Book Now', href: 'https://calendly.com/henryagustin297/introductory-call', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Company Information',
      links: [
        { text: 'About Us', href: '#' },
        { text: 'We are hiring', href: '#' },
        { text: 'Blog', href: '#' }
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Terms', href: '#' },
        { text: 'Privacy policy', href: '#' }
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' }
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'IOS & Android', href: '#' },
        { text: 'Watch a Demo', href: '#' },
        { text: 'Customers', href: '#' },
        { text: 'API', href: '#' }
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
    Made With Love By <a class="text-blue-600 underline dark:text-muted" href="https://github.com/lexcode1227"> @lexcode</a> · All Right Reserved.
  `,
};
