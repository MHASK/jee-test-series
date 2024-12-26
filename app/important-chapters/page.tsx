'use client';
import SubPageNav from '../components/SubPageNav';
import EmptyState from '../components/EmptyState';
import SEOMetadata from '../components/SEOMetadata';

export default function ImportantChapters() {
  const metadata = {
    title: "Most Important Chapters for JEE 2024",
    description: "AI-analyzed important chapters and topics for JEE 2024, based on previous year patterns, expert insights, and expected weightage distribution.",
    keywords: [
      "JEE important chapters",
      "JEE important topics",
      "JEE chapter weightage",
      "JEE scoring chapters",
      "JEE Physics chapters",
      "JEE Chemistry chapters",
      "JEE Maths chapters",
      "JEE topic priority",
      "JEE chapter analysis",
      "JEE high weightage topics",
      "JEE chapter marks",
      "JEE topic selection",
      "JEE chapter difficulty",
      "JEE revision strategy",
      "JEE important formulas"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOMetadata {...metadata} />
      <SubPageNav />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Important JEE Chapters
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              AI-analyzed chapter importance based on previous year patterns and expected weightage in JEE 2024.
            </p>
          </div>
          <EmptyState title="Chapter Analysis" />
        </div>
      </main>
    </div>
  );
} 