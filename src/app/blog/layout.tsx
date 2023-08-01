import { siteConfig } from '@/config/site';
import { MainNav } from '@/components/layouts/main-nav';
import { SiteFooter } from '@/components/layouts/site-footer';

interface BlogLayoutProps {
  children?: React.ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='sticky top-0 z-40 w-full border-b bg-background'>
        <div className='container flex h-16'>
          <MainNav items={siteConfig.nav} />
        </div>
      </header>
      <div className='container flex-1'>
        <div className='mx-auto max-w-5xl'>{children}</div>
      </div>
      <SiteFooter />
    </div>
  );
}
