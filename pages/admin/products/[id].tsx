import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import { GET_PRODUCT } from "@/utils/graphql/queries/products";
import { GET_CATEGORIES } from "@/utils/graphql/queries/categories";
import useFormData from "@/hooks/useFormData";
import upsertProductsTransformation from "@/utils/graphql/transformations/upsertProducts";
import { UPSERT_PRODUCT } from "@/utils/graphql/mutations/products";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { ProductType } from "@/types/index";
import Loading from "@/components/Loading";

export async function getServerSideProps(cxt: any) {
  return {
    props: {
      id: cxt.query.id,
    },
  };
}

interface ICategory {
  value: string;
  label: string;
}

const Index = ({ id }: { id: string }) => {
  const [options, setOptions] = useState([]);
  const [product, setProduct] = useState<ProductType>({
    title: "",
    price: null,
    image: "",
    id: "",
    description: "",
    category: { name: "", description: "", id: "" },
    rating: { rate: 0, count: 0 },
    quantity: null,  });
  const { form, formData, updateFormData } = useFormData({});
  const router = useRouter();
  const { loading } = useQuery(GET_CATEGORIES, {
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      setOptions(
        data.categories.map((category: any) => ({
          value: category.id,
          label: category.name,
        }))
      );
    },
  });
  const [getProduct, { loading: loadingLazyquery }] = useLazyQuery(
    GET_PRODUCT,
    {
      fetchPolicy: "cache-and-network",
      onCompleted: (data) => {
        console.log(data);
        setProduct(data.product);
        setSelectedOption({
          value: data.product.category.id,
          label: data.product.category.name,
        });
      },
    }
  );
  const [upsertProduct] = useMutation(UPSERT_PRODUCT);
  const [selectedOption, setSelectedOption] = useState<ICategory | null>({
    value: "",
    label: "",
  }); // Update the type of selectedOption

  useEffect(() => {
    if (id !== "new") getProduct({ variables: { where: { id } } });
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(formData);
    const { dataCreate, dataUpdate } = upsertProductsTransformation({
      formdata: formData,
      category: selectedOption,
    });
    
    await upsertProduct({
      variables: {
        where: {
          id: id === "new" ? "" : id, //if its empty create a new
        },
        create: dataCreate,
        update: dataUpdate,
      },
    })
      .then(() => {
        router.push("/admin");
        toast.success("Product saved");
      })
      .catch((e) => {
        toast.error("Error saving product");
        console.error(e);
      });
  };

  if (loading || loadingLazyquery) return <Loading />;
  return (
    <div>
      <section className="p-6 mx-auto bg-white  shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Editar : {product.title}
        </h2>

        <form ref={form} onChange={updateFormData} onSubmit={handleSubmit}>
          {product && (
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="title"
                >
                  Artículo
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  defaultValue={product.title}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="price"
                >
                  Precio
                </label>
                <input
                  id="price"
                  type="number"
                  name="price"
                  defaultValue={product.price?.toString()}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="description"
                >
                  Descripción
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={10}
                  defaultValue={product.description}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor="image"
                  >
                    URL de la imagen
                  </label>
                  <input
                    id="image"
                    name="image"
                    type="url"
                    defaultValue={product.image}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label
                    className=" text-gray-700 dark:text-gray-200"
                    htmlFor="quantity"
                  >
                    Cantidad
                  </label>
                  <input
                    id="quantity"
                    name="quantity"
                    type="number"
                    defaultValue={product.quantity?.toString()}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
              </div>

              

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="image"
                >
                  Categoría
                </label>
                <Select
                  options={options}
                  onChange={(e) => {
                    setSelectedOption(e);
                  }}
                  value={selectedOption}
                />
              </div>

            </div>
          )}

          <div className="flex mt-6">
            <button
              type="submit"
              className="px-8 mx-5 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Guardar
            </button>
            <button
              type="button"
              onClick={() => router.push("/admin")}
              className="px-8 mx-5 py-2.5 leading-5 text-gray-800 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Cancelar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Index;
