import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
}

const SEO: React.FC<SEOProps> = ({ title, description, image, article }) => {
  const defaultTitle = "Blue Collar Crypto Society";
  const defaultDescription = "A community-first platform for tradespeople and working-class creators in Web3.";
  const siteUrl = "https://bccshub.com"; 
  const defaultImage = `${siteUrl}/logo.svg`;

  const seo = {
    // If title is provided, use "Page | Brand", otherwise just "Brand"
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: `${siteUrl}${window.location.pathname}`,
  };

  useEffect(() => {
    // Update Title
    document.title = seo.title;

    // Update Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', seo.description);

    // Update OG Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', seo.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', seo.description);

    const ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) ogImg.setAttribute('content', seo.image);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', seo.url);

    // Update Twitter Tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', seo.title);

    const twitterDesc = document.querySelector('meta[property="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', seo.description);

    const twitterImg = document.querySelector('meta[property="twitter:image"]');
    if (twitterImg) twitterImg.setAttribute('content', seo.image);
  }, [seo.title, seo.description, seo.image, seo.url]);

  return null;
};

export default SEO;