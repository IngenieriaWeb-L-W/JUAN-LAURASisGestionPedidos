export type ProductType = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: category;
  rating: {
    rate: number;
    count: number;
  };
  quantity: number;
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