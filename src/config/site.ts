import type { NavItem } from '@/types';

export const siteConfig = {
  name: 'MarkDox',
  description:
    'Create Stunning Documentation, Guides, and Blogs with MDXDocs! Unlock the Power of MDX Files for Effortless Content Creation.',
  nav: [
    {
      title: 'Documentation',
      href: '/docs',
    },
    {
      title: 'Guides',
      href: '/guides',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
  ] satisfies NavItem[],
};
