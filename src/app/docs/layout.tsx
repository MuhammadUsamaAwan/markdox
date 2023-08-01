import { docsConfig } from '@/config/docs';
import { siteConfig } from '@/config/site';
import { ScrollArea } from '@/components/ui/scroll-area';
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
      <div className='container flex-1'>
        <div className='flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10'>
          <ScrollArea className='fixed top-0 z-30 hidden h-[calc(100vh-3.5rem)] w-full py-6 pr-2 md:sticky md:block lg:py-10'>
            <DocsSidebarNav items={docsConfig.sidebarNav} />
          </ScrollArea>
          {children}
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
