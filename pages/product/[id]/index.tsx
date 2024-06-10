import React, { useEffect, useState } from "react";
import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import { GET_PRODUCT } from "@/utils/graphql/queries/products";
import { GET_CATEGORIES } from "@/utils/graphql/queries/categories";
import useFormData from "@/hooks/useFormData";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { ProductType } from "@/types/index";
//import { Details} from "@components/product/details"
import Details from "@/components/product/details"
import PrivateLayout from "@/components/PrivateLayout";
import { RecoilRoot } from "recoil";

export async function getServerSideProps(cxt: any) {
  return {
    props: {
      id: cxt.query.id,
    },
  };
}

const Index = ({ id }: { id: string }) => {
  const [product, setProduct] = useState<ProductType>({
    title: "",
    price: null,
    image: "",
    id: "",
    description: "",
    category: { name: "", description: "", id: "" },
    rating: { rate: 0, count: 0 },
    quantity: null,
  });

  const router = useRouter();

  const [getProduct] = useLazyQuery(GET_PRODUCT, {
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      console.log(data);
      setProduct(data.product);
    },
  });

  useEffect(() => {
    getProduct({ variables: { where: { id } } });
  }, []);

  return (
    <div>
      <PrivateLayout>
        <Details product={product} />
      </PrivateLayout>
    </div>
  );
};

export default Index;

