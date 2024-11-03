import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Navbar } from "@/components/navigasi/navbar";
import { Footer } from "@/components/navigasi/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://dizi.vercel.app"),
  title: {
    default: "Dizi - Free API Provider for Developers | Open Source APIs",
    template: "%s | Dizi"
  },
  description: {
    default:
      "Dizi menyediakan API gratis berkualitas tinggi untuk pengembang. Akses endpoint yang handal untuk proyek Anda dengan dokumentasi lengkap dan dukungan teknis. | Dizi provides high-quality free APIs for developers. Access reliable endpoints for your projects with comprehensive documentation and technical support."
  },
  keywords: [
    "free api",
    "api gratis",
    "developer tools",
    "rest api",
    "web api",
    "open source api",
    "json api",
    "http api",
    "api documentation",
    "api indonesia"
  ],
  authors: [{ name: "Dizi" }],
  creator: "Dizi",
  publisher: "Dizi",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "id_ID",
    url: "https://dizi.vercel.app",
    siteName: "Dizi",
    title: "Dizi - Free API Provider for Developers",
    description:
      "Access high-quality free APIs for your next project. Reliable endpoints, comprehensive documentation, and developer-friendly features.",
    images: [
      {
        url: "https://dizi.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dizi - Free API Provider"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dizi - Free API Provider for Developers",
    description:
      "Access high-quality free APIs for your next project. Reliable endpoints, comprehensive documentation, and developer-friendly features.",
    images: ["https://dizi.vercel.app/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
