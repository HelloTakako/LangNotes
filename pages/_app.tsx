import type { AppProps } from 'next/app';
import MarathiCharContext from '../lib/context/MarathiCharContext';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MarathiCharContext>
      <Component {...pageProps} />
    </MarathiCharContext>
  );
}
