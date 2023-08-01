import { siteConfig } from '@/config/site';
import { Icons } from '@/components/icons';
import { ToggleTheme } from '@/components/layouts/toggle-theme';

export function SiteFooter() {
  return (
    <footer className='border-t'>
      <div className='container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0'>
        <div className='flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0'>
          <Icons.logo />
          <p className='text-center text-sm leading-loose md:text-left'>
            {siteConfig.name} &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <ToggleTheme />
      </div>
    </footer>
  );
}
