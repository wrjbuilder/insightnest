import React from 'react';

const faqs = [
  {
    question: 'What is included in the Freemium plan?',
    answer: 'The Freemium plan includes basic property search functionality, limited neighborhood data access, and standard customer support. It\'s perfect for users who want to explore our platform before committing to a paid plan.',
  },
  {
    question: 'Can I switch plans later?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. When upgrading, you\'ll get immediate access to additional features. If you downgrade, the changes will take effect at the start of your next billing cycle.',
  },
  {
    question: 'How does InsightNest gather its data?',
    answer: 'We aggregate data from multiple reliable sources, including government databases, real estate listings, public records, and trusted third-party providers. Our data is regularly updated to ensure accuracy.',
  },
  {
    question: 'Is there a free trial for Premium or Pro plans?',
    answer: 'Yes, we offer a 14-day free trial for both Premium and Pro plans. You can explore all features risk-free and decide which plan best suits your needs.',
  },
];

export default function FAQ() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">FAQ</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <dl className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-lg bg-white p-8 shadow-sm ring-1 ring-gray-900/5">
                <dt className="text-lg font-semibold leading-7 text-gray-900">{faq.question}</dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}