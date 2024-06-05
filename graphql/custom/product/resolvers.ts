const Product = {
  Mutation: {},
  Query: {
    products: async (_parent: any, args: any) => {
      return 'products';
    },
    product: async (_parent: any, args: any) => {
      return 'product';
    },
  },
};

export { Product };
