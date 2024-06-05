import React from 'react';
import Select from 'react-select';
import { useQuery, useMutation, useLazyQuery } from '@apollo/client';
import { UPSERT_PRODUCT } from '@/utils/mutations/products';
import { GET_PRODUCT_BY_ID } from '@/utils/queries/products';
import { GET_CATEGORIES } from '@/utils/queries/categories';
import useFormData from '@/hooks/useFormData';
import { productsUpsertTrasnformations } from '@/utils/transformations/products';
import { toast } from 'react-toastify';
import { ProductType } from '@/types';
import { useRouter } from 'next/router';

export async function getServerSideProps(context: { params: { id: any } }) {
  const id = context.params.id;
  return {
    props: {
      id,
    },
  };
}

const Index = ({ id }: any) => {
  const router = useRouter();
  const [options, setOptions] = React.useState([]);
  const { form, formData, updateFormData } = useFormData({});
  const [selectedCategory, setSelectedCategory] = React.useState({} as any);
  const [product, setProduct] = React.useState({} as ProductType);
  const [upsertProduct, { loading: loadingMutations }] = useMutation(UPSERT_PRODUCT);
  const [getProductById, { loading: loadingLazyQuery }] = useLazyQuery(GET_PRODUCT_BY_ID, {
    onCompleted(data) {
      setProduct(data.product);
      setSelectedCategory({
        value: data.product.category.id,
        label: data.product.category.name,
      });
    },
  });
  const { loading } = useQuery(GET_CATEGORIES, {
    onCompleted(data) {
      const optionsServer = data.categories.map((category: any) => ({
        value: category.id,
        label: category.name,
      }));
      setOptions(optionsServer);
    },
  });

  React.useEffect(() => {
    if (id !== 'new') {
      getProductById({
        variables: {
          where: {
            id,
          },
        },
      });
    }
  }, []);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData, selectedCategory);
    const { dataCreate, dataUpdate } = productsUpsertTrasnformations({
      formData,
      category: selectedCategory,
    });
    await upsertProduct({
      variables: {
        where: {
          id: id === 'new' ? '' : id,
        },
        create: dataCreate,
        update: dataUpdate,
      },
    })
      .then(async () => {
        toast.success('Product saved');
        router.push('/admin/inventory');
      })
      .catch((error) => {
        toast.error('Error saving product');
        console.error(error);
      });
  };

  if (loading || loadingMutations || loadingLazyQuery) return <div>Loading...</div>;
  return (
    <div>
      <section className=' p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800'>
        <h2 className='text-lg font-semibold text-gray-700 capitalize dark:text-white'>
          Account settings Producto : {product.title ?? 'New'}
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
              <label className='text-gray-700 dark:text-gray-200' htmlFor='title'>
                Title
              </label>
              <input
                id='title'
                name='title'
                type='text'
                defaultValue={product.title ?? ''}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 dark:text-gray-200' htmlFor='price'>
                Price
              </label>
              <input
                id='price'
                name='price'
                type='number'
                defaultValue={product.price ?? ''}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 dark:text-gray-200' htmlFor='description'>
                Description
              </label>
              <textarea
                id='description'
                name='description'
                defaultValue={product.description ?? ''}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
              />
            </div>
            <div>
              <label className='text-gray-700 dark:text-gray-200' htmlFor='image'>
                Image
              </label>
              <input
                id='image'
                name='image'
                type='url'
                defaultValue={product.image ?? ''}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
              />
            </div>
            <div>
              <label className='text-gray-700 dark:text-gray-200' htmlFor='category'>
                Category
              </label>
              <Select
                options={options}
                id='category'
                name='category'
                value={selectedCategory}
                onChange={(selectedOption) => setSelectedCategory(selectedOption)}
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
              Save
            </button>
            <button
              type='button'
              onClick={() => router.push('/admin/inventory')}
              className='px-8 py-2.5 mx-5 leading-5 text-gray-700 transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
            >
              Cancel
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Index;
