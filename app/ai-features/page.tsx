'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function AIFeatures() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold">L</span>
              </div>
              <span className="text-lg font-medium">Lumi AI</span>
            </Link>
            <Link 
              href="/"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              How AI Gives You The Edge
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our advanced AI technology analyzes your performance in real-time to give you insights and advantages that traditional test series can't match.
            </p>
          </div>

          {/* AI Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "Real-time Analysis",
                description: "AI analyzes your test-taking patterns as you solve questions",
                features: [
                  "Question sequence optimization",
                  "Time management insights",
                  "Pattern recognition in mistakes",
                  "Personalized difficulty adjustments"
                ]
              },
              {
                title: "Predictive Insights",
                description: "Get accurate predictions about your future performance",
                features: [
                  "Expected JEE rank prediction",
                  "Topic-wise score forecasting",
                  "Performance trend analysis",
                  "Competitive standing assessment"
                ]
              },
              {
                title: "Smart Practice",
                description: "AI creates a personalized practice plan just for you",
                features: [
                  "Dynamic question difficulty",
                  "Weak area focus",
                  "Smart revision scheduling",
                  "Concept connection mapping"
                ]
              },
              {
                title: "Competitive Edge",
                description: "Stay ahead with exclusive AI-powered insights",
                features: [
                  "Question probability predictions",
                  "Trending topics analysis",
                  "Performance benchmarking",
                  "Strategic time allocation"
                ]
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.features.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition-colors text-lg font-medium"
            >
              Start Your AI-Powered Preparation
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
} 