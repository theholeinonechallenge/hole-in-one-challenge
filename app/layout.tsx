import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Hole In One Challenge | One Shot. Life Changing.',
  description: 'A premium on-course golf attraction that helps courses drive rounds, create excitement, and give golfers a chance to win a $10,000 prize.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
