import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = "https://omarkhalifa.cloud";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Omar Khalifa — Senior Technical Project Manager | Embedded Systems & AI",
  description:
    "Portfolio of Omar Khalifa — PMP®-certified Senior Technical Project Manager and Technical Team Leader at STMicroelectronics, 17 years across embedded validation, IC design and AI-forward workflow automation.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Omar Khalifa",
    title: "Omar Khalifa — Senior Technical Project Manager | Embedded Systems & AI",
    description:
      "PMP®-certified Senior Technical Project Manager at STMicroelectronics — validation engineering, embedded systems, and AI/LLM-driven automation.",
    images: [
      {
        url: "/images/omar-photo.jpg",
        width: 600,
        height: 800,
        alt: "Omar Khalifa",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Omar Khalifa — Senior Technical Project Manager | Embedded Systems & AI",
    description:
      "PMP®-certified Senior Technical Project Manager at STMicroelectronics — validation engineering, embedded systems, and AI/LLM-driven automation.",
    images: ["/images/omar-photo.jpg"],
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧭</text></svg>",
  },
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Omar Khalifa",
  jobTitle: "Senior Technical Project Manager (PMP)",
  worksFor: { "@type": "Organization", name: "STMicroelectronics" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "National Engineering School of Tunis (ENIT)",
  },
  address: { "@type": "PostalAddress", addressCountry: "TN", addressRegion: "Tunis" },
  url: "https://www.linkedin.com/in/omar-khalifa-94050014/",
  sameAs: ["https://www.linkedin.com/in/omar-khalifa-94050014/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-text font-sans">
        <a
          href="#about"
          className="skip-link fixed -top-12 left-4 z-[200] rounded-b-lg bg-accent px-4 py-2 font-semibold text-white focus:top-0 transition-[top]"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
