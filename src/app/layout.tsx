import "./globals.css";
import Navbar from "./components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className="bg-slate-100">
        <div className="w-full bg-slate-50 px-4 md:px-8 lg:px-8 xl:px-16 2xl:px-32">
          <Navbar/>
        </div>
        <div className="w-full bg-slate-50 px-4 md:px-8 lg:px-8 xl:px-16 2xl:px-32">
          {children}
          </div>
      </body>
    </html>
    </ClerkProvider>
  );
}
