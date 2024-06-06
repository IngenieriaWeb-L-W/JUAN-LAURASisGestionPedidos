import React from 'react';
import { ProductType } from '@/types';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { DELETE_PRODUCT } from '@/utils/mutations/products';
import ModalDelete from '@/components/admin/modals/modaldelete';
import { toast } from 'react-toastify';

interface IndexProps {
  product: ProductType;
}

const Index = ({ product }: IndexProps) => {
  const router = useRouter();
  const [deleteProduct] = useMutation(DELETE_PRODUCT);
  const [open, setOpen] = React.useState(false);

  const handleSubmit = async (id: any) => {
    await deleteProduct({
      variables: { where: { id } },
    }).then(() => {
      toast.success('"Producto eliminado con éxito"!');
      router.reload();
      setOpen(false);
    });

  };
  return (
    <tr>
      <td className='px-4 py-4 text-sm font-medium whitespace-nowrap'>
        <div>
          <h2 className='font-medium text-gray-800 dark:text-white '>{product.title}</h2>
        </div>
      </td>
      <td className='px-12 py-4 text-sm font-medium whitespace-nowrap'>
        <div className='inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800'>
          {product.category.name}
        </div>
      </td>
      <td className='px-4 py-4 text-sm max-w-96 '>
        <div>
          <p className='text-gray-500  dark:text-gray-400'>{product.description}</p>
        </div>
      </td>
      <td className='px-4 py-4 text-sm whitespace-nowrap'>
        <div className='flex items-center'>
          <img
            className='object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0'
            src={product.image}
            alt={product.title}
          />
        </div>
      </td>
      <td className='px-4 py-4 text-sm whitespace-nowrap'>
        <div className='w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full'>
          <div className='bg-blue-500 w-2/3 h-1.5'></div>
        </div>
      </td>

      <td className='px-4 py-4 text-sm whitespace-nowrap'>
        <button
          onClick={() => router.push(`/admin/inventory/${product.id}`)}
          className='px-1 py-1  text-white transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100'
        >
          <i
            className='iconify w-10 h-10 text-white'
            data-icon='material-symbols:edit-square-outline'
          />
        </button>
        <button
          onClick={() => {
            setOpen(true);
          }}
          className='px-1 py-1  text-white transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100'
        >
          <i className='iconify w-10 h-10 text-white' data-icon='material-symbols:delete-outline' />
        </button>
      </td>
      <ModalDelete
        open={open}
        setOpen={setOpen}
        handleClose={() => setOpen(false)}
        handleSubmit={() => handleSubmit(product.id)}
      />
    </tr>
  );
};

export default Index;

/* import React from "react";
import { ProductType } from "@/types";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { DELETE_PRODUCT } from "@/utils/mutations/products";
import Modal from "@/components/admin/modal";
import { toast } from "react-toastify";

interface Props {
  product: ProductType;
}
const Index = ({ product }: Props) => {
  const router = useRouter();
  const [deleteProduct, { loading }] = useMutation(DELETE_PRODUCT);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleSubmit = async (id: any) => {
    await deleteProduct({
      variables: {
        id,
      },
    })
      .then(() => {
        toast.success("Producto eliminado con éxito");
        router.reload();
        setOpen(false);
      })
      .catch((e) => {
        toast.error("Error al eliminar el producto");
        console.error(e);
        setOpen(false);
      });
  };
  return (
    <tr>
      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
        <div>
          <h2 className="font-medium text-gray-800 dark:text-white ">
            {product.title}
          </h2>
        </div>
      </td>
      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
        <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
          {product.category.name}
        </div>
      </td>
      <td className="px-4 py-4 text-sm max-w-96 ">
        <div>
          <p className="text-gray-500 dark:text-gray-400">
            {product.description}
          </p>
        </div>
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center">
          <img
            className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
            src={product.image}
            alt={product.title}
          />
        </div>
      </td>

      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full">
          <div className="bg-blue-500 w-2/3 h-1.5"></div>
        </div>
      </td>

      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <button
          onClick={() => router.push(`/admin/products/${product.id}`)}
          className="flex items-center justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 transform bg-blue-600 border border-transparent rounded-md active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
            />
          </svg>
        </button>
        <button
          onClick={() => {
            setOpen(true);
          }}
          className="flex items-center justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 transform bg-blue-600 border border-transparent rounded-md active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        >
          <i
            className="iconfy w-10 h-10 text-white"
            data-icon="material-symbols:auto-delete"
          />
        </button>
      </td>
      <Modal
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        handleSubmit={() => {
          handleSubmit(product.id);
        }}
        loading={loading}
      />
    </tr>
  );
};

export default Index;
 */