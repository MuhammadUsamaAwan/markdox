import { siteConfig } from '@/config/site';
import { FeatureCard } from '@/components/feature-card';
import { Hero } from '@/components/hero';

export default function Home() {
  return (
    <>
      <Hero />
      <section id='features' className='container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24'>
        <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
          <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>Features</h2>
          <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste laboriosam error consectetur eos corporis rem
            sit voluptatem ab ad officiis?
          </p>
        </div>
        <div className='mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3'>
          <FeatureCard
            title='Next.js 13'
            description='App dir, Routing, Layouts, Loading UI and API routes.'
            icon='nextjs'
          />
          <FeatureCard title='React 18' description='Server and Client Components. Use hook.' icon='reactjs' />
          <FeatureCard
            title='Components'
            description='UI components built using Radix UI and styled with Tailwind CSS.'
            icon='tailwind'
          />
        </div>
        <div className='mx-auto text-center md:max-w-[58rem]'>
          <p className='leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
            {siteConfig.name} also includes a blog and a full-featured documentation site built using Contentlayer and
            MDX.
          </p>
        </div>
      </section>
    </>
  );
}
