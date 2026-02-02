import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'truthadjustr - Automated Safety-Critical Software Testing',
  description: 'Ensure compliance with ISO 26262, DO-178C, and IEC 62304 with truthadjustr. Automated testing for C/C++ in automotive, aerospace, and medical industries.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
