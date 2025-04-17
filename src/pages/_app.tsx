import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import '../styles/critical.scss'; // Critical styles loaded first
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apollo-client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

// Dynamically import non-critical CSS
const NonCriticalStyles = dynamic(
  () => import('../components/NonCriticalStyles'),
  { ssr: false }
);

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    // Prefetch the homepage and show details page
    router.prefetch('/');
    // We can't prefetch dynamic routes directly, but we can prefetch a common pattern
    router.prefetch('/shows/[id]');
  }, [router]);

  return (
    <ApolloProvider client={client}>
      <NonCriticalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
};

export default App;
