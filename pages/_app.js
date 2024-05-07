import React from 'react';
import { Provider } from 'react-redux';
import { SessionProvider, useSession } from "next-auth/react"
import { useRouter } from 'next/router';
import store from '../redux/store';

import '../styles/global.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Dashboard from '../componentes/template/dashboard';

function AuthRedirect({ children }) {
  const router = useRouter();
  const isAuthPage = router.pathname === '/auth';
  const { status } = useSession();

  React.useEffect(() => {
    if (status === 'unauthenticated' && !isAuthPage) {
      router.push('/auth');
    }
  }, [status, isAuthPage, router]);

  return children;
}

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();
  const isAuthPage = router.pathname === '/auth';

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <AuthRedirect>
          {isAuthPage ? (
            <Component {...pageProps} />
          ) : (
            <Dashboard>
              <Component {...pageProps} />
            </Dashboard>
          )}
        </AuthRedirect>
      </Provider>
    </SessionProvider>
  );
}