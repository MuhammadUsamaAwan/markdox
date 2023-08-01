import { Icons } from '@/components/icons';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: keyof typeof Icons;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const Icon = Icons[icon];
  return (
    <div className='relative overflow-hidden rounded-lg border bg-background p-2'>
      <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
        <Icon className='h-12 w-12' />
        <div className='space-y-2'>
          <h3 className='font-bold'>{title}</h3>
          <p className='text-sm text-muted-foreground'>{description}</p>
        </div>
      </div>
    </div>
  );
}
