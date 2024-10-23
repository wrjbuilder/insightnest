import React from 'react';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import Features from './components/Features';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <WhySection />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      
      {/* Final CTA */}
      <div className="bg-blue-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Unlock the Power of Data-Driven Real Estate Decisions?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-blue-100">
            Get access to real estate insights that go beyond the listing. Sign up now and start making smarter property decisions today.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-900 shadow-lg transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900">
              Get started for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;