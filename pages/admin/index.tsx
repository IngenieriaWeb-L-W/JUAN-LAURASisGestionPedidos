import React from 'react';
import PrivateLayout from '@/components/PrivateLayout';
import MenuAdmin from '@/components/admin/menuAdmin'


const Index = () => {
  return (
    <div>
      <PrivateLayout>
         {/* <Sidebar />  */}
        
        <MenuAdmin/>
      </PrivateLayout>
    </div>
  );
};

export default Index;
