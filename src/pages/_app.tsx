import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const hashRoutingEnabled = process.browser && window.location.hash;

  if (hashRoutingEnabled) {
    // Disable history-based routing and use hash-based routing instead
    router.replace(router.asPath.replace('/', '#'), undefined, {
      shallow: true,
    });
  }

  return <Component {...pageProps} />;
}
