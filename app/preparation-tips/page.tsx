'use client';
import SubPageNav from '../components/SubPageNav';
import EmptyState from '../components/EmptyState';
import SEOMetadata from '../components/SEOMetadata';

export default function PreparationTips() {
  const metadata = {
    title: "JEE Preparation Tips & Strategies by Top Rankers",
    description: "Expert JEE preparation strategies, study tips, and success formulas backed by AI analysis of top rankers' preparation methods and patterns.",
    keywords: [
      "JEE preparation tips",
      "JEE study strategy",
      "JEE topper tips",
      "How to crack JEE",
      "JEE preparation guide",
      "JEE study plan",
      "JEE time management",
      "JEE success formula",
      "JEE rank improvement",
      "JEE preparation mistakes",
      "JEE exam tips",
      "JEE last minute tips",
      "JEE preparation books",
      "JEE mock test strategy",
      "JEE stress management"
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
              JEE Preparation Strategy
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert tips and proven strategies to crack JEE, backed by AI analysis of successful candidates.
            </p>
          </div>
          <EmptyState title="Preparation Strategies" />
        </div>
      </main>
    </div>
  );
} 