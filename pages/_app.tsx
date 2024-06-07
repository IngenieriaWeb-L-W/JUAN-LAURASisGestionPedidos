import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/graphql/client';
import Layout from '@/components/Layout';
import { Provider } from 'jotai';
import { SessionProvider } from 'next-auth/react';
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
            autoClose={4000}
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

/* import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import { Provider } from 'jotai';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/graphql/client';
import { SessionProvider } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <Provider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ToastContainer
            position='top-center'
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='colored'
          />
        </Provider>
      </SessionProvider>
    </ApolloProvider>
  );
}

/* import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import { Provider } from 'jotai'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
 } 

export default App;*/
 