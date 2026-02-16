import { Helmet } from "react-helmet-async";

const DefaultMeta = ({ title, description }) => {
  const siteName = "QuranicJibon";

  const metaTitle = title ? `${title} - ${siteName}` : siteName;

  const metaDescription =
    description || "Islamic content and Quranic life guidance";

  return (
    <Helmet>
      <title>{metaTitle}</title>

      <meta name="description" content={metaDescription} />

      {/* Open Graph */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://quranicjibon.vercel.app" />
      <meta
        property="og:image"
        content="https://quranicjibon.vercel.app/og-image.jpg"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta
        name="twitter:image"
        content="https://quranicjibon.vercel.app/twitter-image.jpg"
      />

      <link rel="canonical" href="https://quranicjibon.vercel.app" />
      <meta name="robots" content="index, follow" />

      {/* Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          url: "https://quranicjibon.vercel.app",
          name: siteName,
        })}
      </script>
    </Helmet>
  );
};

export default DefaultMeta;
