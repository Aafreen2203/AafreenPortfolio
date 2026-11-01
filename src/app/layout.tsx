import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aafreen Khan — Machine Learning & Applied AI',
  description: 'Aafreen Khan is an MSc Data and Computational Science student at UCD exploring machine learning, applied AI, information retrieval and data-driven applications.',
  openGraph: { title: 'Aafreen Khan — Machine Learning & Applied AI', description: 'Building intelligent systems that make information more useful.', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Aafreen Khan — Machine Learning & Applied AI', description: 'Building intelligent systems that make information more useful.' },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
