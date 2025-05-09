import type { Metadata } from "next";
import "@/lib/globals.css";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { ThemeProviderWithDynamicColors } from "@/components/theme-provider-with-dynamic-colors";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "ERMS-Authentication",
  description: "Authentication Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <ConvexClientProvider>
        <html lang="en" suppressHydrationWarning>
          <ThemeProviderWithDynamicColors>
            <body className={`antialiased flex`} suppressHydrationWarning>
              {children}
            </body>
            <Footer />
          </ThemeProviderWithDynamicColors>
        </html>
      </ConvexClientProvider>
    </ConvexAuthNextjsServerProvider>
  );
}
