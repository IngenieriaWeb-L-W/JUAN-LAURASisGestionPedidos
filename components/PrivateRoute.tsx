import { useSession, signIn } from 'next-auth/react';
import React from 'react';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();
  console.log('session :>> ', session);
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (status === 'unauthenticated') {
    signIn('auth0');
  }

  return <>{children}</>;
};

export default PrivateRoute;
