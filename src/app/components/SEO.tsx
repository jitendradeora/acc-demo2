import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  type?: 'website' | 'article' | 'event';
  schema?: any;
}

export const SEO: React.FC<SEOProps> = ({ title, description, type = 'website', schema }) => {
  // In a real Next.js app, this would use next/head
  // For this environment, we represent the meta logic here
  return (
    <>
      {/* 
        This is a conceptual SEO component. 
        In Next.js App Router, this data would be in layout.tsx or page.tsx metadata.
      */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </>
  );
};

export const OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "النادي الثقافي العربي في الشارقة",
  "url": "https://sharjahculturalclub.ae",
  "logo": "https://sharjahculturalclub.ae/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+971-6-XXXXXXX",
    "contactType": "customer service",
    "areaServed": "AE",
    "availableLanguage": "Arabic"
  },
  "sameAs": [
    "https://facebook.com/sharjahculturalclub",
    "https://twitter.com/sharjahculturalclub",
    "https://instagram.com/sharjahculturalclub"
  ]
};
