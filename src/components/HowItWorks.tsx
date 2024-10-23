import React from 'react';
import { Search, BarChart2, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: 'Search Properties',
    description: 'Use our powerful search tool to find properties in your preferred areas.',
    icon: Search,
  },
  {
    title: 'Get Neighborhood Data',
    description: 'Access detailed crime stats, school ratings, and environmental data.',
    icon: BarChart2,
  },
  {
    title: 'Make Smarter Decisions',
    description: 'Use our insights to find the perfect property that meets all your criteria.',
    icon: CheckCircle,
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Simple Process</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How It Works</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Three simple steps to make data-driven real estate decisions
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative flex flex-col items-center p-8 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {index + 1}. {step.title}
                </h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <button className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Start for free and explore today!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}