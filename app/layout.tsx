import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Book Trailer Generator",
  description: "AI-powered book video trailer generator SaaS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <Navbar />
        <main className="max-w-5xl mx-auto py-10">{children}</main>
      </body>
    </html>
  );
}
