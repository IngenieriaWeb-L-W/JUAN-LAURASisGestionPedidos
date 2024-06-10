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

/* import PrivateLayout from '@/components/PrivateLayout';
import React from 'react';

const Index = () => {
  return (
    <div>
      <PrivateLayout>
        <div>Inventario</div>
      </PrivateLayout>
    </div>
  );
};

export default Index; */