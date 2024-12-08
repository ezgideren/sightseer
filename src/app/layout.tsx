import "./globals.css";
import Navbar from "./components/Navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="w-full">
          <Navbar/>
        </div>
        <div className="w-full">
          {children}
          </div>
      </body>
    </html>
  );
}
