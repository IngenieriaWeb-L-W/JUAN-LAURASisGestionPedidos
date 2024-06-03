export type productType = {
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
  };