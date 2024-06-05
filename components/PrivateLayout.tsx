import React from 'react';
import { useSession, signIn } from 'next-auth/react';

const PrivateLayout = ({ children }: any) => {
  const { status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (status === 'unauthenticated') {
    signIn('auth0');
    return <div>Redirecting...</div>;
  }
  return <div>{children}</div>;
};

export default PrivateLayout;