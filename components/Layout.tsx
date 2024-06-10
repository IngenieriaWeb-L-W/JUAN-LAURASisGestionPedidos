/* eslint-disable import/no-default-export */
import React from 'react';
import Navbar from './navbar';
import Footer from './home/footer';
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

/* import React from 'react';
import Navbar from "@/components/navbar";
import Footer from '@/components/home/footer';

const Layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout; */





