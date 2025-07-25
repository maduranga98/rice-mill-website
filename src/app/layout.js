import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default:
      "Sajith Rice Mill - Premium Sri Lankan Rice | සුදු කැකුළු & සම්බා කැකුළු | Best Price",
    template: "%s | Sajith Rice Mill",
  },
  description:
    "J.A. Santha Nimal's premium Sri Lankan rice mill offering සුදු කැකුළු (Sudu Kakulu), සම්බා කැකුළු (Samba), රතු කැකුළු (Ratu Kakulu) at best prices. Chemical-free traditional කැකුළු since 2009. Bulk orders across Sri Lanka.",
  keywords: [
    // English keywords
    "Sajith Rice Mill",
    "J.A. Santha Nimal",
    "Santha Nimal Rice Mill",
    "Sri Lankan rice",
    "Sudu Kakulu rice",
    "Samba Kakulu rice",
    "premium rice Sri Lanka",
    "organic rice",
    "traditional rice",
    "bulk rice supplier",
    "chemical-free rice",
    "rice mill Sri Lanka",
    "wholesale rice",
    "best price rice",
    "Nadalagamuwa rice",
    "quality rice supplier",
    "samba rice",
    "white rice Sri Lanka",
    "red rice Sri Lanka",
    "rice mills in sri lanka",

    // Sinhala keywords
    "කැකුළු",
    "සුදු කැකුළු",
    "සම්බා",
    "සම්බා කැකුළු",
    "රතු කැකුළු",
    "සජිත් සහල් මෝල",
    "ප්‍රිමියම් සහල්",
    "ඔර්ගනික් සහල්",
    "රසායනික නොමැති සහල්",

    // Location-based
    "Wadumunnegedara rice",
    "North Western Province rice",
    "Giriulla rice supplier",
    "Negombo rice delivery",
    "Colombo rice supplier",
  ],
  authors: [{ name: "Sajith Rice Mill" }, { name: "J.A. Santha Nimal" }],
  creator: "Sajith Rice Mill",
  publisher: "Sajith Rice Mill",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com/"
  ),
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      si: "/", // Sinhala
      ta: "/", // Tamil
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com/",
    title:
      "Sajith Rice Mill - Premium Sri Lankan Rice | සුදු කැකුළු & සම්බා කැකුළු",
    description:
      "J.A. Santha Nimal's premium Sri Lankan rice mill. Best price සුදු කැකුළු, සම්බා කැකුළු, රතු කැකුළු. Chemical-free traditional කැකුළු since 2009.",
    siteName: "Sajith Rice Mill",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sajith Rice Mill - Premium Sri Lankan Rice - සුදු කැකුළු සම්බා කැකුළු",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sajith Rice Mill - Premium Sri Lankan Rice | Best Price කැකුළු",
    description:
      "J.A. Santha Nimal's premium rice mill. සුදු කැකුළු, සම්බා කැකුළු, රතු කැකුළු at best prices. Chemical-free traditional rice since 2009.",
    images: ["/og-image.jpg"],
    creator: "@SajithRiceMill",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  },
  category: "food",
  classification: "business",
  referrer: "origin-when-cross-origin",
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#15803d" },
    { media: "(prefers-color-scheme: dark)", color: "#15803d" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

// Enhanced JSON-LD Structured Data with Sinhala keywords
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sajith Rice Mill",
  alternateName: [
    "Sajith Rice Mill.",
    "Santha Nimal Rice Mill",
    "සජිත් සහල් මෝල",
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com/",
  logo: {
    "@type": "ImageObject",
    url: `${
      process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com/"
    }/logo-512x512.png`,
    width: 512,
    height: 512,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+94-77-925-8293",
    contactType: "customer service",
    areaServed: "LK",
    availableLanguage: ["English", "Sinhala", "Tamil"],
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nadalagamuwa, Wadumunnegedara",
    addressLocality: "North Western Province",
    addressCountry: "LK",
    postalCode: "60170",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 7.398382,
    longitude: 80.006091,
  },
  foundingDate: "2009-12",
  founder: {
    "@type": "Person",
    name: "J.A. Santha Nimal",
    alternateName: "Santha Nimal",
  },
  description:
    "Premium quality Sudu Kakulu (සුදු කැකුළු), Samba Kakulu (සම්බා කැකුළු), and Ratu Kakulu (රතු කැකුළු) rice supplier in Sri Lanka. Chemical-free, traditional organic methods since 2009 with best prices.",
  slogan: "Premium Quality Rice - කැකුළු ප්‍රිමියම් තත්ත්වය",
  industry: "Food Production",
  numberOfEmployees: "10-50",
  email: "sajithricemill@gmail.com",
  priceRange: "$$",
  paymentAccepted: ["Cash", "Bank Transfer", "Mobile Payment"],
  currenciesAccepted: "LKR",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Premium Rice Products - ප්‍රිමියම් සහල් නිෂ්පාදන",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Sudu Kakulu Rice - සුදු කැකුළු",
          description:
            "Premium white raw rice, chemical-free and organic. Available in 5kg, 10kg, 25kg packs at best prices.",
          category: "Food & Beverages",
          brand: "Sajith Rice Mill",
          offers: {
            "@type": "Offer",
            availability: "InStock",
            priceRange: "Best Price",
            priceCurrency: "LKR",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Samba Kakulu Rice - සම්බා කැකුළු",
          description:
            "Premium aromatic rice with firm texture. Traditional samba variety at best prices.",
          category: "Food & Beverages",
          brand: "Sajith Rice Mill",
          offers: {
            "@type": "Offer",
            availability: "InStock",
            priceRange: "Best Price",
            priceCurrency: "LKR",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Ratu Kakulu Rice - රතු කැකුළු",
          description:
            "Traditional red rice variety, rich in nutrients and authentic flavor.",
          category: "Food & Beverages",
          brand: "Sajith Rice Mill",
          offers: {
            "@type": "Offer",
            availability: "InStock",
            priceRange: "Best Price",
            priceCurrency: "LKR",
          },
        },
      },
    ],
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Sri Lanka",
    },
    {
      "@type": "State",
      name: "North Western Province",
    },
  ],
  serviceArea: [
    "Giriulla",
    "Negombo",
    "Colombo",
    "Kelaniya",
    "Minuwangoda",
    "Katunayake",
    "Ekala",
    "Kotugoda",
    "Marandagahamula",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Bulk Rice Supply - තොග සහල් සැපයුම",
        description:
          "Wholesale rice supply for restaurants, hotels and large households at best prices",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Island-wide Delivery - දිවයින පුරා බෙදාහැරීම",
        description: "Rice delivery service across Sri Lanka",
      },
    },
  ],
  knowsAbout: [
    "Rice cultivation",
    "Organic farming",
    "Traditional rice varieties",
    "සහල් වගාව",
    "ඔර්ගනික් ගොවිතැන",
    "සම්ප්‍රදායික සහල් වර්ග",
  ],
};

const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com/"
  }/#business`,
  name: "Sajith Rice Mill",
  alternateName: "සජිත් සහල් මෝල",
  image: `${
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com/"
  }/logo-512x512.png`,
  telephone: "+94-77-925-8293",
  email: "sajithricemill@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nadalagamuwa, Wadumunnegedara",
    addressLocality: "North Western Province",
    addressRegion: "North Western Province",
    addressCountry: "LK",
    postalCode: "60170",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 7.398382,
    longitude: 80.006091,
  },
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com/",
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-16:00"],
  priceRange: "$$",
  servesCuisine: "Sri Lankan",
  paymentAccepted: ["Cash", "Bank Transfer"],
  currenciesAccepted: "LKR",
  hasMap: `https://maps.google.com/?q=7.398382,80.006091`,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1",
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item:
        process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Products",
      item: `${
        process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com/"
      }/#products`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Contact",
      item: `${
        process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com/"
      }/#contact`,
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbData),
          }}
        />

        {/* Additional Meta Tags */}
        <meta name="geo.region" content="LK" />
        <meta
          name="geo.placename"
          content="Nadalagamuwa, North Western Province"
        />
        <meta name="geo.position" content="7.398382;80.006091" />
        <meta name="ICBM" content="7.398382, 80.006091" />

        {/* Language and Content */}
        <meta name="language" content="English, Sinhala, Tamil" />
        <meta name="content-language" content="en, si, ta" />

        {/* Business Information */}
        <meta name="business-name" content="Sajith Rice Mill" />
        <meta name="business-type" content="Rice Mill, Food Production" />
        <meta name="established" content="2009" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Preconnect */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin=""
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning={true}
      >
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_title: 'Sajith Rice Mill - Premium Sri Lankan Rice',
                  page_location: window.location.href,
                  custom_map: {
                    'dimension1': 'rice_type',
                    'dimension2': 'package_size',
                    'dimension3': 'location'
                  }
                });
              `}
            </Script>
          </>
        )}

        {/* Microsoft Clarity */}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
            `}
          </Script>
        )}

        <Navbar />
        <main role="main" itemScope itemType="https://schema.org/WebPage">
          {children}
        </main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
