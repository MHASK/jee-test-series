import Head from 'next/head';

interface SEOMetadataProps {
  title: string;
  description: string;
  keywords: string[];
  pageType?: string;
}

export default function SEOMetadata({ title, description, keywords, pageType = "article" }: SEOMetadataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lumiprep.com';
  
  return (
    <Head>
      {/* Basic Metadata */}
      <title>{title} | Lumi AI JEE Test Series</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={pageType} />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:image" content={`${baseUrl}/og-image.png`} />
      <meta property="og:site_name" content="Lumi AI JEE Test Series" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}/twitter-image.png`} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={baseUrl} />

      {/* Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Lumi AI JEE Test Series",
          "description": description,
          "url": baseUrl,
          "sameAs": [
            "https://twitter.com/lumiprep",
            "https://facebook.com/lumiprep",
            "https://instagram.com/lumiprep"
          ]
        })}
      </script>
    </Head>
  );
} 