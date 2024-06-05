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