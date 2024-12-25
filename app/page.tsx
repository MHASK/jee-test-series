import Image from "next/image";
import PaymentButton from './components/PaymentButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black relative">
      {/* Restore Gradient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-violet-500 opacity-[0.02] blur-[120px] -translate-y-1/2"></div>
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-violet-500 opacity-[0.02] blur-[120px] -translate-y-1/2"></div>
      </div>
      {/* Header */}
      <Header />

      <main className="pt-[120px] px-6">
        <div className="max-w-[1400px] mx-auto">
          {/* Hero Section */}
          <HeroSection />

          {/* Social Proof - Moved up for better flow */}
          <SocialProofBanner />

          {/* Key Features - Now includes AI features */}
          <KeyFeatures />

          {/* Test Series Structure - Moved up as it's core offering */}
          <TestSeriesDetails />

          {/* Subject Coverage */}
          <SubjectCoverage />

          {/* Important Dates */}
          <ImportantDates />

          {/* Success Stories - Combined both sections */}
          <StudentResults />

          {/* Pricing Section */}
          <PricingSection />

          {/* FAQ Section */}
          <FAQSection />

          {/* Final CTA */}
          <FinalCTA />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Component: Header
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">
        <nav className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
              <span className="text-white font-medium">L</span>
            </div>
            <span className="text-lg font-medium">Lumi AI</span>
          </a>

          {/* Timer */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">
              Test Series starts in:
            </span>
            <div className="flex items-center gap-1 text-sm font-medium">
              <div className="w-10 h-8 flex items-center justify-center bg-violet-50 rounded">
                <span className="text-violet-700">12</span>
              </div>
              <span>:</span>
              <div className="w-8 h-8 flex items-center justify-center bg-violet-50 rounded">
                <span className="text-violet-700">08</span>
              </div>
              <span>:</span>
              <div className="w-8 h-8 flex items-center justify-center bg-violet-50 rounded">
                <span className="text-violet-700">45</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="px-6 py-3 bg-violet-500 text-white rounded-full hover:bg-violet-600 transition-colors">
            Enroll Now
          </button>
        </nav>
      </div>
    </header>
  );
};

// Component: HeroSection
const HeroSection = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1000px] mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 text-black text-sm font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
          </span>
          India's Most Advanced JEE Test Series
        </div>
        <h1 className="text-[72px] leading-[1.1] font-medium tracking-[-0.02em] mb-6">
          Master JEE 2024 with
          <br />
          <span className="text-black">Lumi AI Test Series</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-[600px] mx-auto">
          Join 50,000+ JEE aspirants experiencing personalized preparation with AI-powered adaptive tests and real-time analytics.
        </p>
        <div className="flex items-center justify-center gap-4 mb-16">
          <button className="px-6 py-3 bg-violet-500 text-white rounded-full hover:bg-violet-600 transition-colors">
            Enroll Now
          </button>
          <button className="px-6 py-3 text-[15px] text-gray-600 hover:text-black transition-colors">
            View JEE 2024 Calendar →
          </button>
        </div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl border border-gray-200 bg-violet-50">
          {[
            { number: "50K+", label: "Active Students" },
            { number: "156%", label: "Avg. Score Improvement" },
            { number: "98.2%", label: "Selection Rate" },
            { number: "45+", label: "in Top 1000 AIR" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-black mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex items-center justify-center gap-8">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm text-gray-600">NTA Approved Pattern</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm text-gray-600">NCERT Aligned</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm text-gray-600">Live Doubt Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component: SocialProofBanner
const SocialProofBanner = () => {
  return (
    <div className="mt-8 p-6 bg-black/5 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex -space-x-4">
            {[
              "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150",
              "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150",
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
            ].map((src, i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                <Image
                  src={src}
                  alt={`Student ${i + 1}`}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div>
            <p className="text-sm font-medium">
              <span className="font-bold text-green-500">127 students</span> enrolled in the last 24 hours
            </p>
            <p className="text-xs text-gray-600">Early bird offer ends in 2 days</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-500"></span>
          </span>
          <div className="text-sm">
            <span className="font-bold text-violet-500">Live:</span> 1,234 students practicing now
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

// Component: ImportantDates
const ImportantDates = () => {
  return (
    <div className="mt-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Important Dates</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Stay on track with key JEE Mains 2024 dates and deadlines
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            date: "Feb 15, 2024",
            title: "Session 1 Registration",
            status: "Open",
            description: "Last date to register for JEE Mains 2024 Session 1"
          },
          {
            date: "Mar 1-15, 2024",
            title: "Session 1 Exam",
            status: "Upcoming",
            description: "Computer Based Test (CBT) for Session 1"
          },
          {
            date: "Apr 1, 2024",
            title: "Session 2 Registration",
            status: "Coming Soon",
            description: "Registration opens for JEE Mains 2024 Session 2"
          }
        ].map((date, i) => (
          <div key={i} className="p-8 rounded-2xl border border-gray-200 hover:border-black/20 transition-colors">
            <div className="text-sm text-gray-500 mb-2">{date.date}</div>
            <h3 className="text-xl font-bold mb-2">{date.title}</h3>
            <div className={`inline-block px-3 py-1 rounded-full text-sm mb-4 ${
              date.status === 'Open' ? 'bg-green-100 text-green-700' :
              date.status === 'Upcoming' ? 'bg-blue-100 text-blue-700' :
              'bg-gray-100 text-gray-700'
            }`}>
              {date.status}
            </div>
            <p className="text-gray-600">{date.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Component: MockTestPreview
const MockTestPreview = () => {
  return (
    <div className="aspect-square w-full max-w-[580px] rounded-2xl overflow-hidden">
      <div className="relative w-full h-full bg-gradient-to-tr from-[#2563EB] to-[#0EA5E9] p-8">
        <div className="absolute inset-0 bg-white/5"></div>
        <div className="relative z-10 h-full rounded-2xl border border-[#E2E8F0]/20 bg-white/95 backdrop-blur-sm p-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="text-sm font-medium">Physics • Question 1/30</div>
              <div className="text-sm">Time: 25:00</div>
            </div>
            <div className="p-4 bg-[#1E3A8A]/[0.03] rounded-lg">
              <p className="text-sm">A particle moves in a circle of radius R with constant speed v. The magnitude of its acceleration is...</p>
            </div>
            <div className="space-y-2">
              {['v��/R', '2v/R', 'v/R', 'R/v'].map((option, i) => (
                <div key={i} className="p-3 border border-[#E2E8F0] rounded-lg hover:bg-[#2563EB]/[0.02] cursor-pointer">
                  {option}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component: SubjectCoverage
const SubjectCoverage = () => {
  return (
    <div className="mt-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Complete Subject Coverage</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Comprehensive coverage of all JEE topics with AI-powered practice
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            subject: "Physics",
            icon: "⚡️",
            topics: ["Mechanics", "Thermodynamics", "Electromagnetism", "Modern Physics"],
            questions: "5000+",
            color: "from-orange-500/10 to-pink-500/10",
            iconColor: "from-orange-500 to-pink-500"
          },
          {
            subject: "Chemistry",
            icon: "🧪",
            topics: ["Physical", "Organic", "Inorganic", "Analytical"],
            questions: "4500+",
            color: "from-emerald-500/10 to-teal-500/10",
            iconColor: "from-emerald-500 to-teal-500"
          },
          {
            subject: "Mathematics",
            icon: "📐",
            topics: ["Algebra", "Calculus", "Geometry", "Trigonometry"],
            questions: "5500+",
            color: "from-blue-500/10 to-violet-500/10",
            iconColor: "from-blue-500 to-violet-500"
          }
        ].map((subject, i) => (
          <div key={i} className="group">
            <div className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-black/20 transition-all">
              <div className={`text-4xl mb-6 w-16 h-16 rounded-xl bg-gradient-to-br ${subject.iconColor} flex items-center justify-center`}>
                {subject.icon}
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{subject.subject}</h3>
              <div className="space-y-3 mb-6">
                {subject.topics.map((topic, j) => (
                  <div key={j} className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  {subject.questions} questions
                </div>
                <button className="text-black font-medium hover:text-gray-600 transition-colors">
                  View All →
                </button>
              </div>
            </div>
          </div>
        ))}
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
        <h2 className="text-4xl font-bold mb-4">Student Success Stories</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Join thousands of students transforming their JEE preparation with Lumi AI
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            name: "Arjun Patel",
            image: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?w=800",
            testimonial: "The adaptive tests helped me identify and improve my weak areas. My mock test scores improved by 65 percentile in just 2 months.",
            stats: "Physics: 94/100",
            city: "Mumbai"
          },
          {
            name: "Priya Singh",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
            testimonial: "Lumi AI's personalized study plan and real-time analysis completely changed my preparation strategy. It's like having a personal mentor 24/7.",
            stats: "Chemistry: 98/100",
            city: "Delhi"
          },
          {
            name: "Rahul Kumar",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
            testimonial: "The detailed performance analytics helped me understand exactly where I was losing marks. My accuracy improved significantly.",
            stats: "Mathematics: 96/100",
            city: "Bangalore"
          },
          {
            name: "Ananya Sharma",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800",
            testimonial: "The AI predictions were surprisingly accurate. It helped me focus on topics that needed more attention.",
            stats: "Overall: 99.2 percentile",
            city: "Hyderabad"
          },
          {
            name: "Karthik R",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
            testimonial: "The quality of questions and instant solutions helped me build strong concepts. The AI mentor's suggestions were always on point.",
            stats: "AIR under 1000",
            city: "Chennai"
          },
          {
            name: "Neha Gupta",
            image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800",
            testimonial: "From struggling with time management to completing papers with extra time - Lumi AI's analysis made this possible.",
            stats: "98.8 percentile",
            city: "Pune"
          }
        ].map((testimonial, i) => (
          <div key={i} className="p-8 rounded-2xl border border-gray-200 hover:border-black/20 transition-all">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium text-lg">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.city}</div>
              </div>
            </div>
            <p className="text-gray-600 mb-4">"{testimonial.testimonial}"</p>
            <div className="text-sm font-medium text-black">{testimonial.stats}</div>
          </div>
        ))}
      </div>

      {/* Success Metrics */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl border border-gray-200 bg-violet-50">
        {[
          { label: "Average Score Improvement", value: "156%" },
          { label: "Students in Top 1000", value: "45+" },
          { label: "Selection Rate", value: "98%" },
          { label: "Daily Active Students", value: "50K+" }
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Component: PricingSection
const PricingSection = () => {
  return (
    <div className="mt-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Everything you need to crack JEE Mains 2024
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Price Column */}
        <div className="space-y-8">
          <div className="p-8 rounded-2xl border border-gray-200 bg-white">
            <div className="flex items-end gap-2 mb-6">
              <span className="text-5xl font-bold">₹999</span>
              <span className="text-gray-500 mb-1">/month</span>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Full access to all features</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Unlimited practice tests</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>AI-powered analysis</span>
              </div>
            </div>
            <button className="w-full px-6 py-3 bg-violet-500 text-white rounded-full hover:bg-violet-600 transition-colors">
              Get Started Now
            </button>
          </div>
        </div>

        {/* Features Column */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold mb-6">Everything you get:</h3>
          <div className="grid gap-6">
            {[
              {
                title: "Complete Test Series",
                desc: "20 Full Mock Tests + 50 Chapter Tests"
              },
              {
                title: "AI-Powered Analysis",
                desc: "Real-time performance tracking and predictions"
              },
              {
                title: "Video Solutions",
                desc: "Detailed video explanations for all questions"
              },
              {
                title: "Personal AI Mentor",
                desc: "24/7 doubt solving and guidance"
              },
              {
                title: "Performance Reports",
                desc: "Detailed analysis after each test"
              },
              {
                title: "Mobile Access",
                desc: "Practice anywhere, anytime"
              }
            ].map((feature, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-medium">{i + 1}</span>
                </div>
                <div>
                  <div className="font-medium mb-1">{feature.title}</div>
                  <div className="text-sm text-gray-600">{feature.desc}</div>
                </div>
              </div>
            ))}
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
          Everything you need to know about PrepAI
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            q: "How does the AI-powered analysis work?",
            a: "Our AI analyzes your performance patterns, time management, and question-solving approach to provide personalized insights and recommendations."
          },
          {
            q: "Is the test interface exactly like JEE Mains?",
            a: "Yes, we provide an exact replica of the JEE Mains interface, including the calculator, question palette, and marking scheme."
          },
          {
            q: "How many mock tests are included?",
            a: "You get access to 20 full-length mock tests, plus chapter-wise tests and previous year papers."
          },
          {
            q: "Can I access PrepAI on mobile?",
            a: "Yes, PrepAI is fully responsive and works seamlessly on all devices - mobile, tablet, and desktop."
          },
          {
            q: "How accurate are the AI predictions?",
            a: "Our AI predictions have shown 95% accuracy in predicting final JEE Mains scores based on mock test performance."
          },
          {
            q: "What if I need help while practicing?",
            a: "Our AI mentor is available 24/7 to help you with doubts, and we provide detailed video solutions for all questions."
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
const FinalCTA = () => {
  return (
    <div className="mt-32">
      <div className="p-16 md:p-24 rounded-2xl bg-violet-900 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to start your JEE preparation?
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Join thousands of successful JEE aspirants preparing with our AI-powered platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-colors font-medium">
            Enroll Now
          </button>
          <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition-colors text-white">
            View Sample Test
          </button>
        </div>
      </div>
    </div>
  );
};

// Component: Footer
const Footer = () => {
  return (
    <footer className="mt-32 py-12 border-t border-[#E2E8F0]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8">
            <span className="font-medium">Lumi AI</span>
            <div className="flex items-center gap-6 text-sm text-[#1E3A8A]/60">
              <a href="#" className="hover:text-[#1E3A8A] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#1E3A8A] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#1E3A8A] transition-colors">Help</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm text-[#1E3A8A]/60">
              © 2024 Lumi AI. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Add this new component for dedicated AI features
const AIFeatures = () => {
  return (
    <div className="mt-32">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563EB]/5 text-[#2563EB] text-sm font-medium mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]"></span>
          </span>
          Powered by Advanced AI
        </div>
        <h2 className="text-4xl font-bold mb-4">Experience Next-Gen AI Features</h2>
        <p className="text-xl text-[#1E3A8A]/60 max-w-2xl mx-auto">
          Our cutting-edge AI technology transforms your JEE preparation with personalized insights and real-time analysis
        </p>
      </div>

      {/* Major AI Features */}
      <div className="space-y-24">
        {/* AI Feature 1: Smart Analysis */}
        <div className="flex items-center gap-16">
          <div className="flex-1">
            <div className="text-[#2563EB] font-semibold mb-2">Real-time Performance Analysis</div>
            <h3 className="text-3xl font-bold mb-6">AI That Understands Your Mind</h3>
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
                  <li key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <div className="bg-gray-50 p-8 relative">
              {/* Placeholder Dashboard */}
              <div className="space-y-4">
                <div className="h-8 w-32 bg-blue-100 rounded-lg animate-pulse"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-blue-50 rounded-xl animate-pulse"></div>
                  <div className="h-24 bg-blue-50 rounded-xl animate-pulse"></div>
                  <div className="h-24 bg-blue-50 rounded-xl animate-pulse"></div>
                  <div className="h-24 bg-blue-50 rounded-xl animate-pulse"></div>
                </div>
                <div className="h-40 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl animate-pulse"></div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Feature 2: Personalized Learning */}
        <div className="flex items-center gap-16 flex-row-reverse">
          <div className="flex-1">
            <div className="text-[#2563EB] font-semibold mb-2">Adaptive Learning Path</div>
            <h3 className="text-3xl font-bold mb-6">Your Personal AI Mentor</h3>
            <div className="space-y-4">
              <p className="text-lg text-[#1E3A8A]/70">
                Our AI creates a dynamic study plan that evolves with your performance, just like a personal mentor.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    title: "Smart Question Selection",
                    desc: "AI picks questions based on your weak areas"
                  },
                  {
                    title: "Adaptive Difficulty",
                    desc: "Questions adjust to your skill level"
                  },
                  {
                    title: "Focus Recommendations",
                    desc: "AI suggests topics needing attention"
                  },
                  {
                    title: "Progress Tracking",
                    desc: "Real-time monitoring of improvement"
                  }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#2563EB]/[0.03] border border-[#2563EB]/10">
                    <div className="font-medium mb-1">{item.title}</div>
                    <div className="text-sm text-[#1E3A8A]/70">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <div className="bg-gray-50 p-8 relative">
              {/* Placeholder Learning Path */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 animate-pulse"></div>
                  <div className="flex-1">
                    <div className="h-4 w-32 bg-blue-100 rounded animate-pulse mb-2"></div>
                    <div className="h-3 w-24 bg-blue-50 rounded animate-pulse"></div>
                  </div>
                </div>
                <div className="h-[2px] bg-gradient-to-r from-blue-200 to-purple-200"></div>
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-20 bg-blue-50 rounded-lg animate-pulse"></div>
                  ))}
                </div>
              </div>
              {/* Progress Indicator */}
              <div className="absolute top-4 right-4">
                <div className="w-16 h-16 rounded-full border-4 border-blue-200 border-t-blue-500 animate-spin"></div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Feature 3: Predictive Analytics */}
        <div className="flex items-center gap-16">
          <div className="flex-1">
            <div className="text-[#2563EB] font-semibold mb-2">Predictive AI Analytics</div>
            <h3 className="text-3xl font-bold mb-6">See Your Future Performance</h3>
            <div className="space-y-4">
              <p className="text-lg text-[#1E3A8A]/70">
                Our AI predicts your JEE performance and suggests improvements to achieve your target rank.
              </p>
              <div className="p-6 rounded-xl bg-[#2563EB]/[0.03] border border-[#2563EB]/10">
                <div className="font-medium mb-4">What AI Predicts:</div>
                <div className="space-y-3">
                  {[
                    "Expected score range in JEE Mains",
                    "Potential rank based on current performance",
                    "Topic-wise score predictions",
                    "Required improvement areas for target rank"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#2563EB]/10 flex items-center justify-center">
                        <span className="text-sm font-medium text-[#2563EB]">{i + 1}</span>
                      </div>
                      <span className="text-[#1E3A8A]/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <div className="bg-gray-50 p-8 relative">
              {/* Placeholder Analytics */}
              <div className="space-y-6">
                <div className="h-40 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 rounded-xl animate-pulse"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="h-4 w-20 bg-blue-100 rounded animate-pulse"></div>
                    <div className="h-8 bg-blue-50 rounded-lg animate-pulse"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-24 bg-blue-100 rounded animate-pulse"></div>
                    <div className="h-8 bg-blue-50 rounded-lg animate-pulse"></div>
                  </div>
                </div>
                <div className="flex gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex-1 h-16 bg-gradient-to-b from-blue-50 to-transparent rounded-t-lg animate-pulse"></div>
                  ))}
                </div>
              </div>
              {/* Live Indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <div className="text-xs text-gray-400">Live Updates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
