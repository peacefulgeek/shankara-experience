import { Helmet } from "react-helmet-async";

interface ArticleSchemaProps {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  authorImage: string;
  url: string;
  category: string;
}

/**
 * ArticleSchema component generates JSON-LD structured data for articles
 * This enables rich snippets in Google search results including:
 * - Article headline and description
 * - Author information with image
 * - Publication date
 * - Featured image
 * - Publisher information
 */
export default function ArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  authorName,
  authorImage,
  url,
  category,
}: ArticleSchemaProps) {
  // Convert display date to ISO 8601 format for schema
  const parseDate = (displayDate: string): string => {
    // Handle formats like "Jan 15, 2026" or "Dec 4, 2025"
    const date = new Date(displayDate);
    if (isNaN(date.getTime())) {
      // Fallback to current date if parsing fails
      return new Date().toISOString();
    }
    return date.toISOString();
  };

  const isoDatePublished = parseDate(datePublished);
  const isoDateModified = dateModified ? parseDate(dateModified) : isoDatePublished;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": {
      "@type": "ImageObject",
      "url": image,
      "width": 1200,
      "height": 630
    },
    "datePublished": isoDatePublished,
    "dateModified": isoDateModified,
    "author": {
      "@type": "Person",
      "name": authorName,
      "image": {
        "@type": "ImageObject",
        "url": authorImage
      },
      "url": "https://theshankaraexperience.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "The Shankara Experience",
      "logo": {
        "@type": "ImageObject",
        "url": "https://shankara-pull.b-cdn.net/images/shankara-logo.webp",
        "width": 200,
        "height": 60
      },
      "url": "https://theshankaraexperience.com"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "articleSection": category,
    "keywords": getKeywordsForCategory(category),
    "inLanguage": "en-US"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}

/**
 * Returns relevant keywords based on article category
 */
function getKeywordsForCategory(category: string): string[] {
  const keywordMap: Record<string, string[]> = {
    "Oracle Cards": [
      "oracle cards",
      "divination",
      "card reading",
      "spiritual guidance",
      "intuition",
      "self-reflection",
      "Shankara Oracle"
    ],
    "History": [
      "divination history",
      "ancient divination",
      "oracle traditions",
      "spiritual practices",
      "ancient wisdom",
      "mystical traditions"
    ],
    "Psychology": [
      "psychological benefits",
      "mental health",
      "self-reflection",
      "mindfulness",
      "emotional healing",
      "personal growth",
      "oracle therapy"
    ]
  };

  return keywordMap[category] || [
    "oracle",
    "divination",
    "spiritual guidance",
    "Shankara"
  ];
}
