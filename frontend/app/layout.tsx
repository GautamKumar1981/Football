import { ReactNode } from 'react';
import '../styles/globals.css'; // Importing Tailwind CSS

export const metadata = {
  title: 'Football App',
  description: 'A comprehensive football application',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
