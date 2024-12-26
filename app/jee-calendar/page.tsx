'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function JEECalendar() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Lumi AI"
                width={32}
                height={32}
                className="w-8 h-8 rounded-lg"
              />
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
              JEE 2024 Calendar
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete schedule of JEE Main & Advanced 2024 with important dates and preparation milestones.
            </p>
          </div>

          {/* Important Dates Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* JEE Main Session 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-violet-600 font-semibold mb-4">JEE Main 2024 - Session 1</div>
              <div className="space-y-4">
                {[
                  { date: "Dec 15, 2023", event: "Application Form Opens" },
                  { date: "Jan 15, 2024", event: "Last Date to Apply" },
                  { date: "Jan 24-31, 2024", event: "Examination Dates" },
                  { date: "Feb 12, 2024", event: "Result Declaration" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                    <div className="text-violet-600 font-medium whitespace-nowrap">{item.date}</div>
                    <div>{item.event}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* JEE Main Session 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-violet-600 font-semibold mb-4">JEE Main 2024 - Session 2</div>
              <div className="space-y-4">
                {[
                  { date: "Feb 2, 2024", event: "Application Form Opens" },
                  { date: "Mar 2, 2024", event: "Last Date to Apply" },
                  { date: "Apr 1-15, 2024", event: "Examination Dates" },
                  { date: "Apr 25, 2024", event: "Result Declaration" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                    <div className="text-violet-600 font-medium whitespace-nowrap">{item.date}</div>
                    <div>{item.event}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* JEE Advanced */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-violet-600 font-semibold mb-4">JEE Advanced 2024</div>
              <div className="space-y-4">
                {[
                  { date: "Apr 30, 2024", event: "Registration Opens" },
                  { date: "May 7, 2024", event: "Last Date to Register" },
                  { date: "May 26, 2024", event: "Examination Date" },
                  { date: "Jun 9, 2024", event: "Result Declaration" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                    <div className="text-violet-600 font-medium whitespace-nowrap">{item.date}</div>
                    <div>{item.event}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Preparation Milestones */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-violet-600 font-semibold mb-4">Preparation Milestones</div>
              <div className="space-y-4">
                {[
                  { date: "Dec 2023", event: "Complete Syllabus First Revision" },
                  { date: "Jan 2024", event: "Focus on Mock Tests (Session 1)" },
                  { date: "Feb-Mar 2024", event: "Advanced Topics & Second Revision" },
                  { date: "Apr 2024", event: "Final Mock Tests (Session 2)" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                    <div className="text-violet-600 font-medium whitespace-nowrap">{item.date}</div>
                    <div>{item.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Preparation Tips */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Preparation Strategy Timeline</h2>
            <div className="space-y-6">
              {[
                {
                  phase: "3-4 Months Before Exam",
                  tips: [
                    "Complete syllabus revision",
                    "Start taking full-length mock tests",
                    "Focus on weak areas identified by AI analysis",
                    "Practice previous year questions"
                  ]
                },
                {
                  phase: "2 Months Before Exam",
                  tips: [
                    "Increase mock test frequency",
                    "Revise important formulas and concepts",
                    "Work on time management strategies",
                    "Analyze mock test performance patterns"
                  ]
                },
                {
                  phase: "1 Month Before Exam",
                  tips: [
                    "Daily mock tests and analysis",
                    "Quick revision of entire syllabus",
                    "Focus on high-weightage topics",
                    "Practice stress management techniques"
                  ]
                }
              ].map((phase, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">{phase.phase}</h3>
                  <ul className="space-y-3">
                    {phase.tips.map((tip, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-violet-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 