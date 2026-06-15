import './globals.css';
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-gray-50 min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
      </body>
    </html>
  );
}