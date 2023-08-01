import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export function Hero() {
  return (
    <section className='space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32'>
      <div className='container flex max-w-[64rem] flex-col items-center gap-4 text-center'>
        <div className='rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium'>Introducing {siteConfig.name}</div>
        <h1 className='font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>
          Streamline Your Documentation Workflow
        </h1>
        <p className='max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
          {siteConfig.description}
        </p>
        <div className='grid grid-cols-2 gap-x-4'>
          <Link href='/docs' className={cn(buttonVariants({ size: 'lg' }))}>
            Documentation
          </Link>
          <Link href='/guides' className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}>
            Guides
          </Link>
        </div>
      </div>
    </section>
  );
}
