import React from 'react';
import SideBar from '@/components/admin/sidebar';
import PrivateRoute from "@/components/PrivateRoute" 

const PrivateLayout = ({ children }: any) => {
  return (
    <div>
      <PrivateRoute>
        <SideBar>{children}</SideBar>
      </PrivateRoute>
    </div>
  );
};

export default PrivateLayout;

/* import React from 'react';
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

export default PrivateLayout; */