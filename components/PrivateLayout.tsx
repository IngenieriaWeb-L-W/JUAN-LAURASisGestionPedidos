import React from 'react';
import SideBar from '@/components/admin/sidebar';
import PrivateRoute from './PrivateRoute';

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
