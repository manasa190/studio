'use client';

import AnimatedBackground from '@/components/ui/animated-background';

export function RetailFeaturesDemo() {
  const FEATURES = [
    {
      id: 'brand',
      title: 'Brand-Themed Interiors',
      description: "Translating your brand's visual identity into a physical space that communicates your values at every touchpoint.",
    },
    {
      id: 'window',
      title: 'Dynamic Window Displays',
      description: 'Captivating passers-by and encouraging foot traffic with creative installations that stop them in their tracks.',
    },
    {
      id: 'pos',
      title: 'Point-of-Sale Optimization',
      description: 'Creating welcoming and efficient transaction counters that leave a positive final impression and encourage repeat visits.',
    },
    {
      id: 'flex',
      title: 'Flexible Fixturing',
      description: 'Designing modular display systems that can evolve with your seasons, collections, and changing business needs.',
    },
  ];

  return (
    <div className='grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-2'>
      <AnimatedBackground
        className='rounded-xl bg-[#D9E021]'
        transition={{
          type: 'spring',
          bounce: 0.2,
          duration: 0.6,
        }}
        enableHover
      >
        {FEATURES.map((feature, index) => (
          <div key={index} data-id={`feature-${index}`}>
            <div className='flex select-none flex-col space-y-2 p-10'>
              <h3 className='text-xl font-bold text-zinc-800 dark:text-zinc-50 font-serif'>
                {feature.title}
              </h3>
              <p className='text-base text-zinc-600 dark:text-zinc-400'>
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </AnimatedBackground>
    </div>
  );
}
