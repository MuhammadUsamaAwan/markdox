import '@/styles/globals.css';

import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';
import { fontHeading, fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable, fontHeading.variable)}>
        {children}
      </body>
    </html>
  );
}
