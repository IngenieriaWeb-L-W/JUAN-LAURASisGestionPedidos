import React from 'react';
import useFormData from '@/hooks/useFormData';
import { Role } from '@prisma/client';
import Select from 'react-select';
import { useRouter } from 'next/router';
import { createUser } from '@/utils/api';
import { nanoid } from 'nanoid';
import Email from 'next-auth/providers/email';

const User = () => {
  const { form, formData, updateFormData } = useFormData({});
  const [selectedRole, setSelectedRole] = React.useState({} as any);
  const router = useRouter();
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData);
    const password = nanoid();
    try {
      const usuario = await createUser({
        name: formData.name,
        email: formData.email,
        password: password,
      });
      console.log(usuario);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <section className=' p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800'>
        <h2 className='text-lg font-semibold text-gray-700 capitalize dark:text-white'>
          Configuración de la cuenta : Nueva
        </h2>

        <form
          ref={form}
          onChange={updateFormData}
          onSubmit={handleSubmit}
          className='mt-8'
          autoComplete='off'
        >
          <div className=' max-w-5xl grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='text-gray-700 dark:text-gray-200' htmlFor='name'>
                Nombre
              </label>
              <input
                id='name'
                name='name'
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
              />
            </div>
            <div>
              <label className='text-gray-700 dark:text-gray-200' htmlFor='email'>
                email
              </label>
              <input
                id='email'
                name='email'
                type='email'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
              />
            </div>
            <div>
              <label className='text-gray-700 dark:text-gray-200' htmlFor='category'>
                Rol
              </label>
              <Select
                options={Object.values(Role).map((role) => ({ value: role, label: role }))}
                id='role'
                name='role'
                value={selectedRole}
                onChange={(selectedOption: any) => setSelectedRole(selectedOption)}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
              />
            </div>
          </div>
          <div className='flex justify-start mt-6'>
            <button
              type='submit'
              onClick={handleSubmit}
              className='px-8 py-2.5 mx-5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
            >
              Guardar
            </button>
            <button
              type='button'
              onClick={() => router.push('/admin/inventory')}
              className='px-8 py-2.5 mx-5 leading-5 text-gray-700 transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
            >
              Cancelar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default User;

/* import Sidebar from '@/components/admin/sidebar';
import Table from '@/components/admin/table';
import React from 'react';
import PrivateLayout from '@/components/PrivateLayout';
import prisma from '@/config/prisma';

export const getServerSideProps = async () => {
  const countProducts = await prisma.product.count();
  return {
    props: {
      countProducts,
    },
  };
};

const Index = ({ countProducts = 0 }) => {
  return (
    <div>
      <PrivateLayout>
        {/* <Sidebar /> 
      *//* }
        <Table countProducts={countProducts} />
      </PrivateLayout>
    </div>
  );
};

export default Index; */ 