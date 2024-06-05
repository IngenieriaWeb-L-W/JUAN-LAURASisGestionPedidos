import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/graphql/client';
import Layout from '@/components/Layout';
import { Provider } from 'jotai';
import { SessionProvider } from 'next-auth/react';
import { ToastProvider } from '@/context/useToast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <ApolloProvider client={client}>
      <Provider>
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ToastContainer
            position='top-center'
            autoClose={5000}
            newestOnTop
            closeOnClick
            pauseOnFocusLoss
            pauseOnHover
            theme='colored'
          />
        </SessionProvider>
      </Provider>
    </ApolloProvider>
  );
}
