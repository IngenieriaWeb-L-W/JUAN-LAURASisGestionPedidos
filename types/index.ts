export type ProductType = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number| null;
  category: category;
  rating: {
    rate: number;
    count: number;
  };
  quantity: number | null;
};

type category = {
  name: string;
  description: string;
  id: string;
};

/* export type productType = {
    id: string;
    title: string;
    description: string;
    rating: {
      rate: number;
      count: number;
    };
    image: string;
    price: number;
    category: {
      name: string;
      description: string;
      id: string;
    };
  }; */