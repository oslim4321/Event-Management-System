import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "@/components/AuthProvider";
import { Providers } from "@/GlobalRedux/provider";
// import Navbar from '@/components/Navbar';
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Event Manager",
  description: "Event Manager Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const activePath = headersList.get("x-invoke-path");

  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Providers>
            <AuthProvider>
              <Header />
              {children}
            </AuthProvider>
          </Providers>
        </div>
      </body>
    </html>
  );
}
