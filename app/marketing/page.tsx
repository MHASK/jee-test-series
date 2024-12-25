'use client';

import { useState } from 'react';
import html2canvas from 'html2canvas';
import { useTheme } from '../providers/ThemeProvider';

// Fix Image component usage
const ImageWithFallback = ({ src, alt, ...props }: any) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      {...props}
    />
  );
};

interface MarketingAsset {
  id: string;
  type: string;
  selected: boolean;
}

export default function MarketingPage() {
  const { colorScheme, setColorScheme, getGradient } = useTheme();
  const gradient = getGradient(colorScheme);

  const [assets, setAssets] = useState<MarketingAsset[]>([
    { id: 'insta-square', type: 'social', selected: false },
    { id: 'insta-story', type: 'social', selected: false },
    { id: 'facebook-post', type: 'social', selected: false },
    { id: 'leaderboard', type: 'display', selected: false },
    { id: 'rectangle', type: 'display', selected: false },
    { id: 'skyscraper', type: 'display', selected: false },
  ]);

  const [customText, setCustomText] = useState({
    heading: 'JEE Mains 2024',
    subheading: 'AI-powered Test Series',
    price: '₹999',
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleDownload = async (id?: string) => {
    const elementsToDownload = id 
      ? [document.getElementById(id)] 
      : assets.filter(a => a.selected).map(a => document.getElementById(a.id));

    for (const element of elementsToDownload) {
      if (element) {
        const canvas = await html2canvas(element);
        const link = document.createElement('a');
        link.download = `${element.id}.png`;
        link.href = canvas.toDataURL();
        link.click();
      }
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setUploadedImages(prev => [...prev, imageUrl]);
      };
      reader.readAsDataURL(file);
    }
  };

  // Color scheme options
  const schemes = ['blue', 'purple', 'green'];

  return (
    <div className="min-h-screen bg-white p-8">
      {/* Left Side - Marketing Assets */}
      <div className="pr-80">
        <h1 className="text-3xl font-bold mb-12">Marketing Assets</h1>
        
        {/* Social Media Posters */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Social Media Posters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Instagram Square Post */}
            <div 
              id="insta-square"
              style={{
                background: `linear-gradient(to bottom right, ${gradient.from}, ${gradient.to})`
              }}
              className="aspect-square rounded-2xl p-6 text-white relative overflow-hidden"
            >
              {selectedImage && (
                <div className="absolute inset-0">
                  <ImageWithFallback
                    src={selectedImage}
                    alt="Background"
                    className="w-full h-full object-cover opacity-20"
                  />
                </div>
              )}
              <div className="h-full flex flex-col justify-between relative z-10">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{customText.heading}</h3>
                  <p className="text-lg">{customText.subheading}</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">{customText.price}</div>
                  <div className="text-sm opacity-90">Limited time offer</div>
                </div>
              </div>
            </div>

            {/* Instagram Story */}
            <div 
              id="insta-story"
              className="aspect-[9/16] bg-gradient-to-br from-[#2563EB] to-[#0EA5E9] rounded-2xl p-6 text-white relative overflow-hidden"
            >
              {selectedImage && (
                <ImageWithFallback
                  src={selectedImage}
                  alt="Background"
                  className="w-full h-full object-cover opacity-20"
                />
              )}
              <div className="h-full flex flex-col justify-between relative z-10">
                <div>
                  <h3 className="text-3xl font-bold mb-4">20 Days Left</h3>
                  <p className="text-xl">For JEE Mains January 2024</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-sm opacity-90">Complete Package</div>
                    <div className="text-3xl font-bold">{customText.price}</div>
                  </div>
                  <div className="text-sm">
                    • 20 Full Mock Tests
                    <br />
                    • AI Analysis
                    <br />
                    • Video Solutions
                  </div>
                </div>
              </div>
            </div>

            {/* More formats... */}
          </div>
        </section>

        {/* Display Ads */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Display Ads</h2>
          <div className="space-y-8">
            {/* Leaderboard */}
            <div 
              id="leaderboard"
              className="w-[728px] h-[90px] bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] rounded-lg p-4 text-white relative overflow-hidden"
            >
              {/* Ad content */}
            </div>

            {/* Rectangle */}
            <div 
              id="rectangle"
              className="w-[300px] h-[250px] bg-gradient-to-br from-[#2563EB] to-[#0EA5E9] rounded-lg p-6 text-white relative overflow-hidden"
            >
              {/* Ad content */}
            </div>
          </div>
        </section>
      </div>

      {/* Right Side - Controls Panel */}
      <div className="fixed top-8 right-8 w-72 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h3 className="font-semibold mb-6">Customize Assets</h3>
        
        {/* Image Selection */}
        <div className="mb-6">
          <label className="text-sm font-medium mb-2 block">Background Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full text-sm mb-2"
          />
          <div className="grid grid-cols-3 gap-2">
            {uploadedImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(img)}
                className={`aspect-square rounded-lg overflow-hidden border-2 ${
                  selectedImage === img ? 'border-blue-500' : 'border-transparent'
                }`}
              >
                <ImageWithFallback
                  src={img}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Text Customization */}
        <div className="space-y-3 mb-6">
          <input
            type="text"
            value={customText.heading}
            onChange={(e) => setCustomText({ ...customText, heading: e.target.value })}
            className="w-full px-3 py-2 border rounded"
            placeholder="Heading"
          />
          <input
            type="text"
            value={customText.subheading}
            onChange={(e) => setCustomText({ ...customText, subheading: e.target.value })}
            className="w-full px-3 py-2 border rounded"
            placeholder="Subheading"
          />
          <input
            type="text"
            value={customText.price}
            onChange={(e) => setCustomText({ ...customText, price: e.target.value })}
            className="w-full px-3 py-2 border rounded"
            placeholder="Price"
          />
        </div>

        {/* Color Scheme Selection */}
        <div className="mb-6">
          <label className="text-sm font-medium mb-2 block">Color Scheme</label>
          <div className="flex gap-2">
            {schemes.map((scheme) => (
              <button
                key={scheme}
                onClick={() => setColorScheme(scheme)}
                className={`w-8 h-8 rounded-full ${
                  colorScheme === scheme ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                }`}
                style={{
                  background: `linear-gradient(to right, ${getGradient(scheme).from}, ${getGradient(scheme).to})`
                }}
              />
            ))}
          </div>
        </div>

        {/* Asset Selection */}
        <div className="mb-6">
          <label className="text-sm font-medium mb-2 block">Select Assets</label>
          {assets.map((asset) => (
            <label key={asset.id} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={asset.selected}
                onChange={() => {
                  setAssets(assets.map(a => 
                    a.id === asset.id ? { ...a, selected: !a.selected } : a
                  ));
                }}
              />
              {asset.id}
            </label>
          ))}
        </div>

        {/* Export Options */}
        <div className="space-y-2">
          <button
            onClick={() => handleDownload()}
            className="w-full px-4 py-2 bg-[#2563EB] text-white rounded-lg"
          >
            Download Selected
          </button>
          <select 
            className="w-full px-3 py-2 border rounded"
            onChange={(e) => handleDownload(e.target.value)}
          >
            <option value="">Export as...</option>
            <option value="png">PNG</option>
            <option value="jpg">JPG</option>
          </select>
        </div>
      </div>
    </div>
  );
} 