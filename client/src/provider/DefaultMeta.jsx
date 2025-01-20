import { Helmet } from "react-helmet-async";

const DefaultMeta = ({ title, description }) => {
  return (
    <div>
      <Helmet>
        <title>{title && title}</title>{" "}
        <meta
          name="description"
          content={`${(description && description, " - QuranicJibon")}`}
        />
        <meta
          property="og:title"
          content={`${(title && title, " - QuranicJibon")}`}
        />
        <meta
          property="og:description"
          content={`${(title && title, " - QuranicJibon")}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quranicjibon.vercel.app" />
        <meta property="og:image" content="https://www.example.com/image.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="My Application" />
        <meta
          property="twitter:description"
          content="Check out my application!"
        />
        <meta
          property="twitter:image"
          content="https://www.example.com/twitter-image.jpg"
        />{" "}
        <link rel="canonical" href="https://quranicjibon.vercel.app" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://quranicjibon.vercel.app",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.example.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    `}
        </script>
      </Helmet>
    </div>
  );
};

export default DefaultMeta;
