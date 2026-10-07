import React from "react";
import { companyConfig } from "@/data/company";

export const JsonLd: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": companyConfig.name,
    "alternateName": companyConfig.shortName,
    "url": "https://svtechnologies.com.np",
    "logo": "https://svtechnologies.com.np/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": companyConfig.contact.phone,
      "contactType": "customer service",
      "email": companyConfig.contact.email,
      "areaServed": ["NP", "Global"],
      "availableLanguage": ["English", "Nepali"]
    },
    "sameAs": [
      companyConfig.social.linkedin,
      companyConfig.social.facebook,
      companyConfig.social.instagram,
      companyConfig.social.github
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dillibazar",
      "addressLocality": "Kathmandu",
      "addressCountry": "NP"
    },
    "description": companyConfig.description
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
};
