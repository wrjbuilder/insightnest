import React from 'react';
import { Search, Map, BarChart3, Bell, FileText, Download, HeadphonesIcon, Scale, Building } from 'lucide-react';

const features = [
  {
    name: 'Property Search',
    description: 'Advanced filters to find your perfect property match',
    icon: Search,
  },
  {
    name: 'Interactive Maps',
    description: 'Visualize crime rates, schools, and local developments',
    icon: Map,
  },
  {
    name: 'Market Analytics',
    description: 'Deep insights into market trends and property values',
    icon: BarChart3,
  },
  {
    name: 'Smart Alerts',
    description: 'Stay updated on market changes and price shifts',
    icon: Bell,
  },
  {
    name: 'Custom Reports',
    description: 'Generate detailed analysis reports',
    icon: FileText,
  },
  {
    name: 'Data Export',
    description: 'Export insights to CSV or PDF formats',
    icon: Download,
  },
  {
    name: 'Dedicated Support',
    description: '24/7 priority customer support',
    icon: HeadphonesIcon,
  },
  {
    name: 'Property Scoring',
    description: 'Comprehensive property evaluation scores',
    icon: Scale,
  },
  {
    name: 'Neighborhood Insights',
    description: 'In-depth data on local amenities and safety',
    icon: Building,
  },
];

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Features That Empower Your Decisions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Everything you need to make informed real estate decisions, all in one place.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}