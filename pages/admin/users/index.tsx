import PrivateLayout from '@/components/PrivateLayout';
import Table from '@/components/admin/userTable';
import React from 'react';
import prisma from '@/config/prisma';

export const getServerSideProps = async () => {
  const countUsers = await prisma.user.count();
  return {
    props: {
      countUsers,
    },
  };
};

const Index = ({ countUsers }: any) => {
  return (
    <div className='bg-gray-800'>
      <PrivateLayout>
        {/* <Sidebar />  */}
        <Table countUsers={countUsers} />
      </PrivateLayout>
    </div>
  );
};

export default Index;