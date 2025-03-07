import { Helmet } from "react-helmet";

function SEO({ title, description, keywords, image, url }) {
    return (
        <Helmet>
            {/* Page Title */}
            <title>{title}</title>

            {/* Basic Meta */}
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Eric Stevens Jr." />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        
            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
        </Helmet>
    );
} 

export default SEO;