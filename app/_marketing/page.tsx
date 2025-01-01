'use client';

import SubPageNav from '../components/SubPageNav';

export default function MarketingAssets() {
  const marketingAssets = [
    {
      category: "Social Media",
      items: [
        {
          title: "Launch Announcement",
          description: "90% off launch campaign visuals",
          assets: [
            {
              type: "Instagram Post",
              dimensions: "1080x1080",
              url: "/marketing/social/launch-ig.png"
            },
            {
              type: "Instagram Story",
              dimensions: "1080x1920",
              url: "/marketing/social/launch-story.png"
            }
          ]
        },
        {
          title: "AI Features",
          description: "AI capabilities highlight visuals",
          assets: [
            {
              type: "Feature Carousel",
              dimensions: "1080x1080",
              url: "/marketing/social/ai-features.png"
            }
          ]
        }
      ]
    },
    {
      category: "Email Marketing",
      items: [
        {
          title: "Launch Email",
          description: "Email campaign visuals and copy",
          assets: [
            {
              type: "Email Header",
              dimensions: "600x200",
              url: "/marketing/email/header.png"
            },
            {
              type: "Price Table",
              dimensions: "600x400",
              url: "/marketing/email/pricing.png"
            }
          ]
        }
      ]
    },
    {
      category: "Ad Creatives",
      items: [
        {
          title: "Google Display Ads",
          description: "Display network banners",
          assets: [
            {
              type: "Leaderboard",
              dimensions: "728x90",
              url: "/marketing/ads/leaderboard.png"
            },
            {
              type: "Rectangle",
              dimensions: "300x250",
              url: "/marketing/ads/rectangle.png"
            }
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SubPageNav />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Marketing Assets</h1>
            <p className="text-gray-600">Campaign materials and promotional content</p>
          </div>

          <div className="space-y-12">
            {marketingAssets.map((category, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold">{category.category}</h2>
                </div>
                
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.items.map((item, j) => (
                      <div key={j} className="space-y-4">
                        <div>
                          <h3 className="font-medium text-lg">{item.title}</h3>
                          <p className="text-sm text-gray-500">{item.description}</p>
                        </div>
                        
                        <div className="grid gap-3">
                          {item.assets.map((asset, k) => (
                            <a
                              key={k}
                              href={asset.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                              <div>
                                <div className="font-medium">{asset.type}</div>
                                <div className="text-sm text-gray-500">{asset.dimensions}</div>
                              </div>
                              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 