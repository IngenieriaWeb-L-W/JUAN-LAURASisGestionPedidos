import React from 'react';
import Navbar from '@/components/Navbar';
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

export default Layout;
