export type ProductType = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: category;
  rating: {
    rate: number;
    count: number;
  };
};

type category = {
  name: string;
  description: string;
  id: number;
};
