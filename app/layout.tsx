import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jaynarayan.dev"),
  title: {
    default: "Jaynarayan Bhol | DevOps Engineer & AWS Specialist",
    template: "%s | Jaynarayan Bhol",
  },
  description:
    "Senior DevOps Engineer with 4+ years of experience in AWS, Kubernetes, Docker, Terraform, and CI/CD pipeline automation. Expert in cloud infrastructure, container orchestration, and DevOps best practices.",
  keywords: [
    "DevOps Engineer",
    "AWS Engineer",
    "Kubernetes",
    "Docker",
    "Terraform",
    "CI/CD",
    "Jenkins",
    "ArgoCD",
    "Cloud Engineer",
    "Infrastructure Automation",
    "Jaynarayan Bhol",
    "Leewayhertz",
  ],
  authors: [{ name: "Jaynarayan Bhol", url: "https://www.linkedin.com/in/jaybl" }],
  creator: "Jaynarayan Bhol",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jaynarayan.dev",
    title: "Jaynarayan Bhol | DevOps Engineer & AWS Specialist",
    description:
      "Senior DevOps Engineer with 4+ years of experience in AWS, Kubernetes, Docker, Terraform, and CI/CD pipeline automation.",
    siteName: "Jaynarayan Bhol Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jaynarayan Bhol - DevOps Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaynarayan Bhol | DevOps Engineer & AWS Specialist",
    description:
      "Senior DevOps Engineer with 4+ years of experience in AWS, Kubernetes, Docker, Terraform, and CI/CD pipeline automation.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#080B14] text-white min-h-screen overflow-x-hidden`}
      >
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "rgba(15, 20, 40, 0.95)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#fff",
              backdropFilter: "blur(20px)",
            },
          }}
        />
      </body>
    </html>
  );
}
