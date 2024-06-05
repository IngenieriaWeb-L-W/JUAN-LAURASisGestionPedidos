import { gql } from 'apollo-server-micro';

const Product = gql`
  type Product {
    id: String
    title: String
    description: String
    price: Float
    image: String
    rating: Rating
    category: Category
    categoryId: String
    createdAt: Date
    createdAt: Date
  }
  type Rating {
    id: String
    rate: Float
    count: Int
    productId: String
    createdAt: Date
    createdAt: Date
  }
  type Category {
    id: String
    name: String
    description: String
    products: [Product]
    createdAt: Date
    createdAt: Date
  }
`;

export { Product };
