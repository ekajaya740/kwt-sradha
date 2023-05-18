import './globals.css';
import { Poppins } from 'next/font/google';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' data-theme='autumn' className={`${poppins.className}`}>
      <body className={`bg-base-100`}>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
