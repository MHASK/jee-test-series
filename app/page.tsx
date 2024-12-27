'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import EnrollmentForm from './components/EnrollmentForm';

// Remove database test function since we're using API routes
async function testApiConnection() {
  try {
    const response = await fetch('/api/enrollments');
    const data = await response.json();
    
    if (data.status === 'healthy') {
      console.log('API connection test: Success');
    } else {
      console.warn('API connection test: Unhealthy', data);
    }
  } catch (error) {
    console.error('API test failed:', error);
  }
}

// Component: EnrollButton
const EnrollButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="px-6 py-3 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors"
  >
    Enroll Now
  </button>
);

export default function Home() {
  const [showEnrollForm, setShowEnrollForm] = useState(false);

  useEffect(() => {
    testApiConnection();
  }, []);

  const handleEnrollClick = () => {
    console.log('Enroll button clicked');
    setShowEnrollForm(true);
  };

  return (
    <div className="min-h-screen bg-white text-black relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-violet-500 opacity-[0.02] blur-[120px] -translate-y-1/2"></div>
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-violet-500 opacity-[0.02] blur-[120px] -translate-y-1/2"></div>
      </div>
      
      {/* Header */}
      <Header onEnrollClick={handleEnrollClick} />

      <main className="pt-[120px] px-6">
        <div className="max-w-[1400px] mx-auto">
          {/* Hero Section */}
          <HeroSection onEnrollClick={handleEnrollClick} />

          {/* Social Proof */}
          <SocialProofBanner />

          {/* Key Features */}
          <KeyFeatures />

          {/* Test Series Structure */}
          <TestSeriesDetails />

          {/* AI Features */}
          <AIFeatures />

          {/* Pricing Section */}
          <PricingSection onEnrollClick={handleEnrollClick} />

          {/* FAQ Section */}
          <FAQSection />

          {/* Final CTA */}
          <FinalCTA onEnrollClick={handleEnrollClick} />

          {/* NEET App Promo Section */}
          <div className="py-24 bg-gradient-to-br from-violet-50 to-purple-50">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Preparing for NEET?
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Try our AI-powered NEET preparation app - Lumi NEET. Join 50,000+ medical aspirants already using it for their NEET preparation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://apps.apple.com/in/app/lumi-neet-ai/id6670749323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span>Download on App Store</span>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.aikolumi.neet"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <span>Get it on Play Store</span>
                </a>
                <a
                  href="https://lumineet.com"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-violet-600 text-white hover:bg-violet-700 transition-colors"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                  </svg>
                  <span>Try Web Version</span>
                </a>
              </div>
              <p className="mt-8 text-sm text-gray-500">
                Join our community of 50,000+ NEET aspirants and experience the power of AI-guided learning
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Enrollment Form Modal */}
      {showEnrollForm && (
        <EnrollmentForm 
          onClose={() => {
            console.log('Closing enrollment form');
            setShowEnrollForm(false);
          }} 
        />
      )}
    </div>
  );
}

// Component: Header
const Header = ({ onEnrollClick }: { onEnrollClick: () => void }) => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 w-screen overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Lumi AI"
                width={32}
                height={32}
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-base sm:text-lg font-medium">Lumi AI</span>
            </Link>

            {/* Right Section */}
            <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
              {/* Timer */}
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-sm text-gray-500 whitespace-nowrap">Starts in:</span>
                <span className="text-sm font-medium text-violet-600 whitespace-nowrap">12:08:45</span>
              </div>

              {/* Enroll Button - Desktop */}
              <button
                onClick={onEnrollClick}
                className="hidden md:block px-4 py-2 bg-violet-600 text-white text-sm font-medium rounded-lg hover:bg-violet-700 transition-colors whitespace-nowrap"
              >
                Enroll Now
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={onEnrollClick}
                className="md:hidden p-2 text-white bg-violet-600 hover:bg-violet-700 rounded-lg"
                aria-label="Enroll Now"
              >
                Enroll Now
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16" aria-hidden="true" />
    </>
  );
};

// Component: HeroSection
const HeroSection = ({ onEnrollClick }: { onEnrollClick: () => void }) => {
  return (
    <div className="pt-16 sm:pt-32 pb-20">
      <div className="max-w-[1000px] mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 text-black text-sm font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
          </span>
          India's First AI-Powered JEE Test Series
        </div>
        <h1 className="text-4xl sm:text-[72px] leading-[1.2] sm:leading-[1.1] font-medium tracking-[-0.02em] mb-6">
          Get Your Unfair
          <br />
          <span className="text-violet-600">AI Advantage</span> in JEE
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-[600px] mx-auto px-4 sm:px-0">
          Our AI analyzes your every move to give personalized insights that other students don't have. Get a competitive edge with adaptive learning.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4 sm:px-0">
          <button
            onClick={onEnrollClick}
            className="w-full sm:w-auto px-8 py-4 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition-colors text-lg font-medium"
          >
            Get AI Advantage • ₹999
          </button>
          <Link 
            href="/ai-features" 
            className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
          >
            See How AI Helps →
          </Link>
        </div>

        {/* Social Proof */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>50,000+ Students</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>500+ AI-Generated Insights</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>25% Better Results</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add this new section right after HeroSection
const AIAdvantageSection = () => {
  return (
    <section id="ai-features" className="py-20 bg-gradient-to-b from-violet-50/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Your AI-Powered Advantage</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our advanced AI gives you insights and advantages that traditional test series can't match. Here's how you'll stay ahead:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Real-time Analysis */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-violet-600 font-semibold mb-4">Real-time Performance Analysis</div>
            <h3 className="text-2xl font-bold mb-4">AI That Thinks Like a Topper</h3>
            <p className="text-gray-600 mb-6">
              Our AI analyzes your test-taking patterns in real-time, just like having a JEE topper guide you through each question.
            </p>
            <ul className="space-y-3">
              {[
                "Question sequence optimization for maximum marks",
                "Time management insights based on your speed",
                "Pattern recognition in your mistakes",
                "Personalized difficulty adjustments"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Predictive Insights */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-violet-600 font-semibold mb-4">Predictive AI Insights</div>
            <h3 className="text-2xl font-bold mb-4">Know Your Future Rank</h3>
            <p className="text-gray-600 mb-6">
              Our AI predicts your JEE rank based on your performance and shows exactly what you need to improve.
            </p>
            <ul className="space-y-3">
              {[
                "Accurate rank predictions based on current trends",
                "Topic-wise improvement recommendations",
                "Competitive analysis against top performers",
                "Daily improvement tracking"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Smart Practice */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-violet-600 font-semibold mb-4">Adaptive Learning</div>
            <h3 className="text-2xl font-bold mb-4">Practice Smarter, Not Harder</h3>
            <p className="text-gray-600 mb-6">
              Our AI creates a personalized practice plan that adapts to your learning style and speed.
            </p>
            <ul className="space-y-3">
              {[
                "Dynamic question difficulty based on your level",
                "Focus on your weak areas automatically",
                "Smart revision scheduling",
                "Concept connection mapping"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Competition Edge */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-violet-600 font-semibold mb-4">Competitive Edge</div>
            <h3 className="text-2xl font-bold mb-4">Stay Ahead of Others</h3>
            <p className="text-gray-600 mb-6">
              Get insights that other students don't have access to, giving you a significant advantage.
            </p>
            <ul className="space-y-3">
              {[
                "Question probability predictions for actual JEE",
                "Trending topics analysis",
                "Performance comparison with toppers",
                "Strategic time allocation advice"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Component: SocialProofBanner
const SocialProofBanner = () => {
  return (
    <div className="mt-8 p-6 bg-black/5 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-violet-100 border-2 border-white flex items-center justify-center">
                <span className="text-violet-500 text-sm font-medium">S{i}</span>
              </div>
            ))}
          </div>
          <div>
            <p className="text-sm font-medium">
              <span className="font-bold text-green-500">127 students</span> enrolled in beta program
            </p>
            <p className="text-xs text-gray-600">Early access offer ends in 2 days</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-500"></span>
          </span>
          <div className="text-sm">
            <span className="font-bold text-violet-500">Live:</span> 234 students practicing
          </div>
        </div>
      </div>
    </div>
  );
};

// Component: QuickStats
const QuickStats = () => {
  return (
    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { number: "50K+", label: "Active Students" },
        { number: "98%", label: "Selection Rate" },
        { number: "150+", label: "Top 1000 Rankers" },
        { number: "15K+", label: "Practice Questions" }
      ].map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] bg-clip-text text-transparent">
            {stat.number}
          </div>
          <div className="text-sm text-[#1E3A8A]/70 mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

// Component: KeyFeatures
const KeyFeatures = () => {
  return (
    <div className="mt-32">
      <div className="text-center mb-16">
        <h2 className="text-[56px] font-bold leading-tight mb-4">
          Your Personal AI Mentor
          <br />
          Available 24/7
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Get instant help, detailed explanations, and personalized guidance at every step of your JEE preparation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: "🧠",
            title: "Smart Error Analysis",
            description: "Understand exactly where you went wrong with step-by-step explanations and conceptual clarity.",
            features: [
              "Mistake pattern identification",
              "Concept gap detection",
              "Step-by-step solutions"
            ],
            color: "from-violet-500/10 to-fuchsia-500/10",
            iconColor: "from-violet-500 to-fuchsia-500"
          },
          {
            icon: "🎯",
            title: "Personalized Guidance",
            description: "Get real-time suggestions and adaptive study plans based on your performance patterns.",
            features: [
              "Custom study schedules",
              "Topic prioritization",
              "Weak area focus"
            ],
            color: "from-blue-500/10 to-cyan-500/10",
            iconColor: "from-blue-500 to-cyan-500"
          },
          {
            icon: "🤖",
            title: "24/7 Doubt Support",
            description: "Never get stuck. Ask questions anytime and get instant, detailed explanations from your AI mentor.",
            features: [
              "Instant doubt resolution",
              "Visual explanations",
              "Related concept links"
            ],
            color: "from-emerald-500/10 to-teal-500/10",
            iconColor: "from-emerald-500 to-teal-500"
          }
        ].map((feature, index) => (
          <div 
            key={index}
            className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-black/20 transition-all duration-300 group"
          >
            <div className="mb-6">
              <div className={`text-4xl mb-6 w-16 h-16 rounded-xl bg-gradient-to-br ${feature.iconColor} flex items-center justify-center`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
            </div>
            <div className="space-y-3">
              {feature.features.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <button className="text-black font-medium hover:text-gray-600 transition-colors">
                See Example →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Demo Preview */}
      <div className="mt-16 p-8 rounded-2xl border border-gray-200">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
            <span className="text-xl">🤖</span>
          </div>
          <div>
            <div className="font-medium">AI Mentor</div>
            <div className="text-sm text-gray-500">Live conversation example</div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 p-4 rounded-2xl bg-black/5">
              <p className="text-gray-600">I'm stuck on this integration problem. Can you help?</p>
            </div>
          </div>
          <div className="flex gap-4 justify-end">
            <div className="flex-1 p-4 rounded-2xl bg-black text-white">
              <p>Of course! Let's break this down step by step. First, let's identify the type of integration...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component: TestSeriesDetails
const TestSeriesDetails = () => {
  return (
    <div className="mt-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Test Series Structure</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Structured practice with increasing difficulty levels
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: "Chapter Tests",
            description: "Topic-wise tests to build strong fundamentals",
            features: [
              "15-30 minutes duration",
              "Instant detailed solutions",
              "Topic mastery tracking",
              "Adaptive difficulty"
            ]
          },
          {
            title: "Subject Tests",
            description: "Complete subject coverage in exam format",
            features: [
              "1 hour duration",
              "Previous year questions",
              "Performance analytics",
              "Rank predictions"
            ]
          },
          {
            title: "Mock Tests",
            description: "Full-length tests in exact JEE pattern",
            features: [
              "3 hours duration",
              "Real exam interface",
              "All India Rank",
              "Detailed analysis"
            ]
          },
          {
            title: "Previous Year Papers",
            description: "Practice with actual JEE questions",
            features: [
              "Year-wise papers",
              "Trending topics",
              "Difficulty analysis",
              "Solution videos"
            ]
          }
        ].map((test, i) => (
          <div key={i} className="p-8 rounded-2xl border border-gray-200 hover:border-black/20 transition-colors">
            <h3 className="text-2xl font-bold mb-3">{test.title}</h3>
            <p className="text-gray-600 mb-6">{test.description}</p>
            <div className="space-y-3">
              {test.features.map((feature, j) => (
                <div key={j} className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Component: PerformanceAnalytics
const PerformanceAnalytics = () => {
  return (
    <div className="mt-32">
      <h2 className="text-3xl font-bold mb-12 text-center">Track Your Progress</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl border border-[#E2E8F0] bg-[#2563EB]/[0.03]">
          <h3 className="font-medium mb-6">Performance Metrics</h3>
          <div className="space-y-4">
            {[
              { metric: "Average Score", value: "205/300", trend: "+15" },
              { metric: "Accuracy Rate", value: "78%", trend: "+5%" },
              { metric: "Time Management", value: "85%", trend: "+10%" }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-[#1E3A8A]/70">{item.metric}</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{item.value}</span>
                  <span className="text-green-500 text-sm">↑{item.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-6 rounded-2xl border border-[#E2E8F0] bg-[#2563EB]/[0.03]">
          <h3 className="font-medium mb-6">Subject-wise Performance</h3>
          <div className="space-y-4">
            {[
              { subject: "Physics", score: 85 },
              { subject: "Chemistry", score: 72 },
              { subject: "Mathematics", score: 68 }
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#1E3A8A]/70">{item.subject}</span>
                  <span className="font-medium">{item.score}%</span>
                </div>
                <div className="h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#2563EB]" 
                    style={{ width: `${item.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Component: AIAnalysisFeatures
const AIAnalysisFeatures = () => {
  return (
    <div className="mt-32">
      <h2 className="text-3xl font-bold mb-12 text-center">AI-Powered Analysis</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Mistake Pattern Analysis */}
        <div className="p-6 rounded-2xl border border-[#E2E8F0] bg-[#2563EB]/[0.03]">
          <h3 className="font-medium mb-6">Mistake Pattern Analysis</h3>
          <div className="space-y-4">
            {[
              {
                type: "Time Management",
                pattern: "Spending too long on complex calculations",
                suggestion: "Practice speed mathematics techniques"
              },
              {
                type: "Concept Gaps",
                pattern: "Mixing similar formulas in Mechanics",
                suggestion: "Review core concepts with video solutions"
              },
              {
                type: "Question Strategy",
                pattern: "Attempting questions in sequential order",
                suggestion: "Try our smart question attempt order"
              }
            ].map((item, i) => (
              <div key={i} className="p-4 border border-[#E2E8F0] rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-[#1E3A8A] mb-1">{item.type}</div>
                    <p className="text-sm text-[#1E3A8A]/70 mb-2">{item.pattern}</p>
                    <div className="text-xs text-[#2563EB] font-medium">{item.suggestion}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl border border-[#E2E8F0] bg-[#2563EB]/[0.03]">
            <h3 className="font-medium mb-6">Personalized Study Plan</h3>
            <div className="space-y-4">
              {[
                {
                  focus: "Weak Topics",
                  action: "Extra practice sets for Thermodynamics",
                  time: "2 hours daily"
                },
                {
                  focus: "Test Strategy",
                  action: "Optimize your question attempt sequence",
                  time: "Review after each test"
                },
                {
                  focus: "Revision",
                  action: "Quick revision of frequently tested concepts",
                  time: "1 hour daily"
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium text-[#2563EB]">{i + 1}</span>
                  </div>
                  <div>
                    <div className="font-medium text-[#1E3A8A] mb-1">{item.focus}</div>
                    <p className="text-sm text-[#1E3A8A]/70">{item.action}</p>
                    <div className="text-xs text-[#2563EB] mt-1">{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Chat Support */}
          <div className="p-6 rounded-2xl border border-[#E2E8F0] bg-[#2563EB]/[0.03]">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-5 h-5 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <h3 className="font-medium">24/7 AI Doubt Resolution</h3>
            </div>
            <div className="bg-white rounded-lg p-4 space-y-3">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-[#2563EB]">Q</span>
                </div>
                <p className="text-sm text-[#1E3A8A]/70">How do I solve this integration?</p>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-[#2563EB] flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-white">AI</span>
                </div>
                <p className="text-sm text-[#1E3A8A]">Let me guide you step by step...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component: StudentResults
const StudentResults = () => {
  return (
    <div className="mt-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Student Growth Stories</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          See how our beta users improved their performance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            growth: "156%",
            subject: "Physics",
            quote: "The AI mentor helped me understand complex concepts better"
          },
          {
            growth: "143%",
            subject: "Chemistry",
            quote: "My test scores improved significantly after using the practice tests"
          },
          {
            growth: "167%",
            subject: "Mathematics",
            quote: "The personalized study plan made a huge difference"
          }
        ].map((story, i) => (
          <div key={i} className="p-6 rounded-xl border border-gray-200">
            <div className="text-3xl font-bold text-violet-500 mb-2">
              {story.growth}
            </div>
            <div className="font-medium mb-2">Score Growth in {story.subject}</div>
            <p className="text-gray-600 text-sm">"{story.quote}"</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center">
                <span className="text-violet-500 text-sm font-medium">S</span>
              </div>
              <div className="text-sm">Beta User</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Component: PricingSection
const PricingSection = ({ onEnrollClick }: { onEnrollClick: () => void }) => {
  const discountedPrice = 999;
  const originalPrice = 1999;
  const remainingSpots = 50;

  const features = [
    {
      title: "20 Full-length Tests",
      description: "Complete CBT mock tests matching JEE Main pattern"
    },
    {
      title: "AI-Powered Analysis",
      description: "Get personalized insights and performance predictions"
    },
    {
      title: "Real Exam Interface",
      description: "Practice on exact JEE Main interface with same tools"
    },
    {
      title: "Performance Analytics",
      description: "Track your progress with detailed analytics"
    },
    {
      title: "Expert Support",
      description: "Get help when you need it"
    },
    {
      title: "Valid till January 2025",
      description: "Complete access until JEE Main January attempt"
    }
  ];

  return (
    <div className="mt-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Complete JEE Test Series</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Get access to 20 full-length tests with AI-powered analysis
        </p>
      </div>

      <div className="max-w-lg mx-auto">
        <div className="rounded-2xl border border-gray-200 overflow-hidden">
          <div className="p-8">
            {/* Price Display */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="text-lg font-medium">JEE Test Series 2025</div>
                <div className="text-sm text-gray-500">Early Bird Offer</div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-3xl font-bold">₹{discountedPrice}</span>
                  <span className="text-sm text-gray-500 line-through">₹{originalPrice}</span>
                </div>
                <div className="inline-block bg-green-100 text-green-700 text-sm font-medium px-2 py-1 rounded">
                  Save ₹{originalPrice - discountedPrice} Today
                </div>
              </div>
            </div>

            {/* Feature List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-violet-50 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">{feature.title}</span>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Urgency Elements */}
            <div className="mb-6 p-4 bg-amber-50 rounded-lg">
              <div className="flex items-center gap-2 text-amber-800 mb-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">Limited Time Offer</span>
              </div>
              <p className="text-sm text-amber-700">
                Price increases to ₹{originalPrice} after December 31st. Lock in the lowest price now!
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={onEnrollClick}
                className="w-full py-3 px-4 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
              >
                Enroll Now at ₹{discountedPrice}
              </button>
              <p className="text-sm text-gray-500 text-center">
                Only {remainingSpots} spots remaining at this price
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="bg-gray-50 p-6 border-t border-gray-200">
            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>24-hour Refund</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component: FAQSection
const FAQSection = () => {
  return (
    <div className="mt-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about our Test Series
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            q: "How many tests are included?",
            a: "You get access to 16 full-length mock tests and 4 module-wise tests, all following the latest JEE pattern."
          },
          {
            q: "Is the test interface exactly like JEE Mains?",
            a: "Yes, we provide an exact replica of the JEE Mains interface, including the calculator, question palette, and marking scheme."
          },
          {
            q: "How does the AI-powered analysis work?",
            a: "Our AI analyzes your performance patterns, time management, and question-solving approach to provide personalized insights and recommendations."
          },
          {
            q: "Can I access the tests on mobile?",
            a: "Yes, our platform is fully responsive and works seamlessly on all devices - mobile, tablet, and desktop."
          },
          {
            q: "How accurate are the AI predictions?",
            a: "Our AI predictions have shown 95% accuracy in predicting final JEE Mains scores based on mock test performance."
          },
          {
            q: "What if I need help while practicing?",
            a: "Our AI mentor is available 24/7 to help you with doubts, and we provide detailed video solutions for all questions."
          },
          {
            q: "What is your refund policy?",
            a: "We offer a 24-hour refund window from the time of account activation, but only if you haven't attempted any tests. Once you start a test, or after 24 hours, no refunds will be provided."
          }
        ].map((faq, i) => (
          <div key={i} className="p-6 rounded-xl border border-gray-200">
            <h3 className="font-bold mb-2">{faq.q}</h3>
            <p className="text-gray-600">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Component: FinalCTA
const FinalCTA = ({ onEnrollClick }: { onEnrollClick: () => void }) => {
  return (
    <div className="mt-32">
      <div className="p-16 md:p-24 rounded-2xl bg-violet-900 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to start your JEE preparation?
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Join thousands of successful JEE aspirants preparing with our AI-powered platform. 
          Try our AI technology on <a href="https://lumineet.com" className="text-white underline hover:text-violet-200">Lumi NEET</a>
        </p>
        <div className="flex justify-center">
          <EnrollButton onClick={onEnrollClick} />
        </div>
      </div>
    </div>
  );
};

// Component: Footer
const Footer = () => {
  const footerLinks = [
    {
      title: "Resources",
      links: [
        { label: "JEE Calendar", href: "/jee-calendar" },
        { label: "JEE Syllabus", href: "/jee-syllabus" },
        { label: "Previous Papers", href: "/previous-papers" },
        { label: "Important Chapters", href: "/important-chapters" },
      ]
    },
    {
      title: "Help",
      links: [
        { label: "Preparation Tips", href: "/preparation-tips" },
        { label: "Contact Us", href: "/contact" },
      ]
    }
  ];

  return (
    <footer className="mt-32 py-8 sm:py-12 border-t border-gray-200">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Copyright */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="Lumi AI"
                width={32}
                height={32}
                className="w-8 h-8 rounded-lg"
              />
              <span className="font-medium">Lumi AI</span>
            </Link>
            <p className="text-sm text-gray-500">
              India's First AI-Powered JEE Test Series
            </p>
            <p className="text-sm text-gray-500 mt-4">
              © 2024 Lumi AI. All rights reserved.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section, i) => (
            <div key={i}>
              <h3 className="font-medium mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link 
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

// Add this new component for dedicated AI features
const AIFeatures = () => {
  return (
    <div className="mt-32">
      <div className="text-center mb-16 px-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563EB]/5 text-[#2563EB] text-sm font-medium mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]"></span>
          </span>
          Powered by Advanced AI
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Next-Gen AI Features</h2>
        <p className="text-lg md:text-xl text-[#1E3A8A]/60 max-w-2xl mx-auto">
          Our cutting-edge AI technology transforms your JEE preparation with personalized insights and real-time analysis
        </p>
      </div>

      {/* Major AI Features */}
      <div className="space-y-16 md:space-y-24">
        {/* AI Feature 1: Smart Analysis */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-4">
          <div className="w-full lg:w-1/2">
            <div className="text-[#2563EB] font-semibold mb-2">Real-time Performance Analysis</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">AI That Understands Your Mind</h3>
            <div className="space-y-4">
              <p className="text-lg text-[#1E3A8A]/70">
                Our AI analyzes your every move - from time spent on questions to your problem-solving patterns.
              </p>
              <ul className="space-y-3">
                {[
                  "Question attempt sequence optimization",
                  "Time management insights",
                  "Topic-wise strength analysis",
                  "Mistake pattern recognition"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#2563EB] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] rounded-2xl overflow-hidden relative bg-gradient-to-br from-blue-50 to-violet-50">
            {/* Brain Analysis Geometric Illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-48 h-48">
                {/* Central circle */}
                <div className="absolute inset-0 rounded-full border-4 border-blue-200 animate-[spin_10s_linear_infinite]" />
                {/* Neural connections */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-24 h-1 bg-gradient-to-r from-blue-300 to-violet-300"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${i * 60}deg)`,
                      transformOrigin: '0 50%',
                      animation: `pulse ${2 + i * 0.5}s infinite alternate`
                    }}
                  />
                ))}
                {/* Nodes */}
                {[...Array(6)].map((_, i) => {
                  const angle = (i * Math.PI * 2) / 6;
                  const x = Math.cos(angle) * 80;
                  const y = Math.sin(angle) * 80;
                  return (
                    <div
                      key={i}
                      className="absolute w-4 h-4 rounded-full bg-blue-400"
                      style={{
                        top: `calc(50% + ${y}px)`,
                        left: `calc(50% + ${x}px)`,
                        transform: 'translate(-50%, -50%)',
                        animation: `float ${2 + i * 0.2}s infinite alternate ease-in-out`
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Continue with similar patterns for other features... */}
        {/* Add geometric illustrations for each section */}
      </div>
    </div>
  );
};
