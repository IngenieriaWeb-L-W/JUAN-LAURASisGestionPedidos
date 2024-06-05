/* eslint-disable import/no-default-export */
import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { useSession } from 'next-auth/react';

const Layout = ({ children }: any) => {
  const { data: session } = useSession();
  //console.log('session', session);
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;



