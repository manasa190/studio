'use client';

import { CrossPatternCard, CrossPatternCardBody } from "@/components/ui/card-with-cross-patter"

export function LuxeFeaturesDemo() {
  const FEATURES = [
    {
      title: 'Artisanal Furniture',
      description: "Custom-made pieces crafted to fit your space's exact dimensions and your personal aesthetic, using rare woods and hand-applied finishes.",
    },
    {
      title: 'Exclusive Flooring & Stone',
      description: 'Sourcing the finest Italian marble, semi-precious stone inlays, and customized hardwood flooring from sustainable global sources.',
    },
    {
      title: 'Home Wellness Wings',
      description: 'Designing dedicated private spa rooms, professional-grade home theaters, and high-end fitness studios with acoustic treatments.',
    },
    {
      title: 'Advanced Home Systems',
      description: 'Fully integrated smart home technology controlling climate, security, and AV systems with extreme precision and security.',
    },
  ];

  return (
    <div className='grid grid-cols-1 gap-12 md:grid-cols-2'>
      {FEATURES.map((feature, index) => (
        <CrossPatternCard key={index}>
          <CrossPatternCardBody className="p-12">
            <h3 className="text-3xl font-bold mb-6 text-[#0A1B3D] font-serif">
              {feature.title}
            </h3>
            <p className="text-lg text-[#666] leading-relaxed">
              {feature.description}
            </p>
          </CrossPatternCardBody>
        </CrossPatternCard>
      ))}
    </div>
  );
}
