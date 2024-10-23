import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Freemium',
    price: '0',
    description: 'Perfect for getting started',
    features: [
      'Basic property search',
      'Limited neighborhood data',
      'Standard support',
      'Basic property comparisons',
      'Monthly market reports',
    ],
    cta: 'Sign up for free',
    highlighted: false,
  },
  {
    name: 'Premium',
    price: '10',
    description: 'Best for active home seekers',
    features: [
      'Advanced property search',
      'Full neighborhood insights',
      'Priority support',
      'Advanced comparisons',
      'Weekly market reports',
      'Custom alerts',
    ],
    cta: 'Upgrade to Premium',
    highlighted: true,
  },
  {
    name: 'Pro',
    price: '25',
    description: 'For real estate professionals',
    features: [
      'Everything in Premium',
      'API access',
      'Custom reports',
      'Data export',
      'Team collaboration',
      'Dedicated support',
    ],
    cta: 'Upgrade to Pro',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Pricing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Choose the Plan That Fits Your Needs
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col justify-between rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 xl:p-10 ${
                tier.highlighted ? 'relative bg-blue-900/20 ring-blue-500' : ''
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-4 py-1 text-sm font-medium text-white">
                  Most Popular
                </div>
              )}
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-white">{tier.name}</h3>
                </div>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-white">${tier.price}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-300">/month</span>
                </p>
                <p className="mt-4 text-sm leading-6 text-gray-300">{tier.description}</p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-blue-400" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.highlighted
                    ? 'bg-blue-500 text-white hover:bg-blue-400 focus-visible:outline-blue-500'
                    : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}