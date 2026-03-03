import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title,
    description,
    keywords,
    author = "Shakeel Arafath",
    image = "/og-image.jpg",
    url = "https://shakeelarafath.in",
    type = "website",
    breadcrumb = null
}) => {
    const siteTitle = "Shakeel Arafath | Digital Marketer & Motion Graphic Designer";
    const fullTitle = title ? `${title} | Shakeel Arafath` : siteTitle;

    // Breadcrumb structure
    const breadcrumbData = breadcrumb ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://shakeelarafath.in"
            },
            ...breadcrumb.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": item.name,
                "item": item.url
            }))
        ]
    } : null;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta name="author" content={author} />

            {/* Structured Data */}
            {breadcrumbData && (
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbData)}
                </script>
            )}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    );
};

export default SEO;
