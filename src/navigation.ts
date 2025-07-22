import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Servicios',
      href: getPermalink('/servicios'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Nosotros',
      href: getPermalink('/nosotros'),

    },
    {
      text: 'Contacto',
      href: getPermalink('/contacto'),
    },
  ],
  actions: [{ text: 'Reservar Ahora', href: 'https://calendly.com/henryagustin297/introductory-call', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Información de la Clínica',
      links: [
        { text: 'Nosotros', href: '#' },
        { text: 'Trabajos', href: '#' },
        { text: 'Blog', href: '#' }
      ],
    },
    {
      title: 'Legal',
      links: [  
        { text: 'Términos y Condiciones', href: getPermalink('/terminos') },
        { text: 'Política de Privacidad', href: getPermalink('/privacidad') }
      ],
    },
    {
      title: 'Soporte',
      links: [
        { text: 'Documentos', href: '#' },
        { text: 'Foro de la Comunidad', href: '#' },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { text: 'IOS & Android', href: '#' },
        { text: 'Ver una Demostración', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos y Condiciones', href: getPermalink('/terminos') },
    { text: 'Política de Privacidad', href: getPermalink('/privacidad') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    Made With Love By <a class="text-blue-600 underline dark:text-muted" href="https://github.com/lexcode1227"> @lexcode</a> · All Right Reserved.
  `,
};
