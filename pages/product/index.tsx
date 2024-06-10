import React from 'react';
import PrivateLayout from '@/components/PrivateLayout';
import Product from '@/components/product'


const Index = () => {
  return (
    <div>
      <PrivateLayout>
         {/* <Sidebar />  */}
        
        <Product/>
      </PrivateLayout>
    </div>
  );
};

export default Index;