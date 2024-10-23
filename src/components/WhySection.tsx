import React from 'react';
import { LineChart, Shield, School, TreePine, Building2 } from 'lucide-react';

const reasons = [
  {
    icon: LineChart,
    title: 'Market Transparency',
    description: 'We believe real estate decisions shouldn\'t be made in the dark. Our platform brings transparency to property data, helping you understand true market value.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Access detailed crime statistics and safety metrics to ensure you\'re investing in secure neighborhoods for you and your family.',
  },
  {
    icon: School,
    title: 'Education Insights',
    description: 'Make informed decisions about schools and educational opportunities in the area with our comprehensive school ratings and data.',
  },
  {
    icon: TreePine,
    title: 'Environmental Awareness',
    description: 'Understand environmental risks and future development plans that could impact property value and quality of life.',
  },
];

export default function WhySection() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-x-3">
              <Building2 className="h-8 w-8 text-blue-600" />
              <h2 className="text-base font-semibold leading-7 text-blue-600">Our Mission</h2>
            </div>
            <p className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why We're Building InsightNest
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're transforming how people make real estate decisions by providing comprehensive, 
              actionable data that goes far beyond basic listings. Our mission is to empower 
              homebuyers, investors, and real estate professionals with the insights they need 
              to make confident, informed decisions.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.title} className="relative pl-16">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <reason.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  {reason.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}