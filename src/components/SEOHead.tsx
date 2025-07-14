import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Faqih Chairul Anam - Software Developer & Web Designer",
  description = "Passionate software developer and web designer specializing in React, TypeScript, and modern web technologies. Creating beautiful, functional applications.",
  keywords = "software developer, web designer, react developer, typescript, javascript, frontend developer, fullstack developer, UI/UX designer",
  image = "/og-image.jpg",
  url = "https://faqih-portfolio.com"
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Faqih Chairul Anam" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="theme-color" content="#1f2937" />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Faqih Chairul Anam Portfolio" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@faqih_anam" />

      {/* Additional Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="msapplication-TileColor" content="#1f2937" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Faqih Chairul Anam",
          "jobTitle": "Software Developer & Web Designer",
          "description": description,
          "url": url,
          "image": image,
          "sameAs": [
            "https://github.com/Luriahc86",
            "https://www.linkedin.com/in/faqih-chairul-287a32319/",
            "https://www.instagram.com/faqih_anam/"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "Institut Teknologi Kalimantan"
          },
          "alumniOf": {
            "@type": "Organization",
            "name": "Institut Teknologi Kalimantan"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;