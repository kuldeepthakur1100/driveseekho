import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav"; // <-- 1. BottomNav import kiya
import { GoogleAnalytics } from '@next/third-parties/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DriveSeekho - Best Driving Schools Near Me With Price & Professional Instructors Near You",
  description: "Find verified driving schools, cars, 2-wheelers, and expert instructors in Delhi NCR at just ₹349/hour. Book your training today!",
  keywords: "driving school near me, driving instructor, car driving training delhi, driveseekho, driving school near me, car driving classes near me, motorcycle driving school near me",
  metadataBase: new URL("https://driveseekho.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DriveSeekho - Learn Driving from Experts",
    description: "Book professional driving instructors and schools near your location.",
    url: "https://driveseekho.com",
    siteName: "DriveSeekho",
    images: [
      {
        url: "/images/bestui.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Drive Seekho",
  },
};

export const viewport: Viewport = {
  themeColor: "#1e5bff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Local Business Schema for Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "DriveSeekho",
              image: "https://driveseekho.com/images/bestui.png",
              "@id": "https://driveseekho.com",
              url: "https://driveseekho.com",
              telephone: "+919876543210",
              address: {
                "@type": "PostalAddress",
                streetAddress: "GD Colony, Mayur Vihar",
                addressLocality: "Delhi",
                postalCode: "110096",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 28.6139,
                longitude: 77.2090,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "06:00",
                closes: "21:00",
              },
              priceRange: "₹₹",
            }),
          }}
        />
      </head>
      {/* 2. pb-20 add kiya hai taaki mobile pe content nav bar ke peeche na chhupe */}
      <body className="min-h-full flex flex-col pb-20 sm:pb-0">
        <main className="flex-grow">{children}</main>
        <Footer />
        
        {/* 3. BottomNav ko yahan add kiya taaki har page par dikhe */}
        <BottomNav />

        {/* Google Analytics */}
        <GoogleAnalytics gaId="G-534550993" />
      </body>
    </html>
  );
}