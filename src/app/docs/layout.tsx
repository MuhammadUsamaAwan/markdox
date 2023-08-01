import { docsConfig } from '@/config/docs';
import { siteConfig } from '@/config/site';
import { MainNav } from '@/components/layouts/main-nav';
import { DocsSidebarNav } from '@/components/layouts/sidebar-nav';
import { SiteFooter } from '@/components/layouts/site-footer';

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='sticky top-0 z-40 w-full border-b bg-background'>
        <div className='container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0'>
          <MainNav items={siteConfig.nav}>
            <DocsSidebarNav items={docsConfig.sidebarNav} />
          </MainNav>
        </div>
      </header>
      <div className='container flex-1'>{children}</div>
      <SiteFooter />
    </div>
  );
}
