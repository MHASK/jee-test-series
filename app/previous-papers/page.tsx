'use client';
import SubPageNav from '../components/SubPageNav';
import EmptyState from '../components/EmptyState';
import SEOMetadata from '../components/SEOMetadata';

export default function PreviousPapers() {
  const metadata = {
    title: "JEE Previous Year Papers Analysis (2014-2024)",
    description: "Detailed analysis of JEE Main & Advanced previous year papers with AI-powered insights, question patterns, and topic-wise breakdown for better preparation.",
    keywords: [
      "JEE previous year papers",
      "JEE question papers",
      "JEE paper analysis",
      "JEE Main papers",
      "JEE Advanced papers",
      "JEE paper pattern",
      "JEE question types",
      "JEE difficulty level",
      "JEE topic analysis",
      "JEE paper solutions",
      "JEE answer key",
      "JEE paper trends",
      "IIT JEE papers",
      "JEE paper download",
      "JEE solved papers"
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
              JEE Previous Year Papers
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Analysis of past 10 years' JEE Main & Advanced papers with AI-powered insights and topic-wise breakdown.
            </p>
          </div>
          <EmptyState title="Previous Papers Analysis" />
        </div>
      </main>
    </div>
  );
} 