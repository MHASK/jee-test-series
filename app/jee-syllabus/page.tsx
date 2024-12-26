'use client';
import SubPageNav from '../components/SubPageNav';
import EmptyState from '../components/EmptyState';
import SEOMetadata from '../components/SEOMetadata';

export default function JEESyllabus() {
  const metadata = {
    title: "JEE 2024 Complete Syllabus & Chapter Weightage",
    description: "Comprehensive JEE 2024 syllabus with chapter-wise weightage analysis, important topics, and AI-powered study recommendations for Physics, Chemistry, and Mathematics.",
    keywords: [
      "JEE 2024 syllabus",
      "JEE Main syllabus",
      "JEE Advanced syllabus",
      "JEE Physics syllabus",
      "JEE Chemistry syllabus",
      "JEE Mathematics syllabus",
      "JEE chapter weightage",
      "JEE important topics",
      "JEE syllabus analysis",
      "JEE preparation guide",
      "JEE exam pattern",
      "JEE marking scheme",
      "IIT JEE syllabus",
      "JOSAA counselling",
      "NTA JEE syllabus"
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
              JEE 2024 Complete Syllabus
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive chapter-wise syllabus for Physics, Chemistry, and Mathematics with topic weightage analysis.
            </p>
          </div>
          <EmptyState title="JEE Syllabus Details" />
        </div>
      </main>
    </div>
  );
} 