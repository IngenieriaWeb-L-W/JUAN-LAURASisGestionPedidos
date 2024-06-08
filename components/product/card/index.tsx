import React, { useEffect, useState } from "react";
import Rating from "../rating";
import { useRouter } from "next/router";
import prisma from "@/config/prisma";
import axios from "axios";

interface ProductTypes {
  product: {
    id: number;
    title: string;
    description: string;
    rating: {
      rate: number;
      count: number;
    };
    image: string;
    price: number;
    category: string;
  };
}

export const getServerSideProps = async () => {
    const countProducts = await prisma.product.count();
    return {
      props: {
        countProducts,
      },
    };
  };

const Index = ({ product }: ProductTypes, { countProducts }: any) => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [setCountProducts] = useState(0);

  useEffect(() => {
    axios.get('/api/graphql') 
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []); // Empty dependency array to run only once on mount

  // Filter products based on countProducts
  const filteredProducts = products.filter((product) => product.category === countProducts);

  return (
    <div
      key={product.id}
      onClick={() => {
        router.push(`pages/product/${product.id}`);
      }}
>
<section className="text-gray-600 body-font">
    <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
        <div className="mt-1 lg:w-3/4 md:w-1/2 p-4 w-full">

            <a className="block relative h-48 w-48 rounded overflow-hidden">
            <img 
                alt={product.title} 
                className="object-cover object-center w-full h-full block" 
                src={product.image}/>
            </a>

            <div className="mt-7">
            <h3 className="text-gray-500 text-xs title-font mb-1">{product.description}</h3>
            <h2 className="text-gray-500 title-font text-lg font-medium">{product.title}</h2>
            <p className="mt-1">${product.price}</p>
            </div>

            <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
              Add to Cart
            </button>
            
            <Rating rating={product?.rating?.rate ?? 0} />
    
        </div>
        </div>  
    </div>
</section>
</div>
  )
}
export default Index;