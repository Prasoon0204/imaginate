import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ClerkProvider } from '@clerk/nextjs'

import "./globals.css";

const IBMPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'
});

export const metadata = {
  title: "Imaginate",
  description: "AI-Powered image generator",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    appearance={{
      variables: { colorPrimary: '#624cf5' },
      layout: {
        unsafe_disableDevelopmentModeWarnings: true,
      },
    }}
    >
    <html lang="en">
      <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
