import React from 'react';
import { Building2 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Building2 className="h-16 w-16" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Unlock Smarter Real Estate Decisions
            <span className="text-blue-400"> with InsightNest</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-300">
            In-depth property and neighborhood insights for homebuyers, investors, and real estate professionals.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="rounded-lg bg-blue-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Sign up for free
            </button>
            <button className="rounded-lg border border-white/20 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2">
              Learn more
            </button>
          </div>
          <p className="mt-8 text-sm text-gray-300">
            Go beyond the listings—discover neighborhood data that drives real estate success
          </p>
        </div>
      </div>
    </div>
  );
}