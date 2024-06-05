import { gql } from '@apollo/client';

const GET_PRODUCTS = gql`
  query Products(
    $where: ProductWhereInput
    $orderBy: [ProductOrderByWithRelationInput!]
    $take: Int
    $skip: Int
  ) {
    products(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
      title
      price
      image
      id
      description
      category {
        name
        description
        id
      }
      rating {
        id
        rate
        count
      }
    }
  }
`;

const GET_PRODUCT_BY_ID = gql`
  query Product($where: ProductWhereUniqueInput!) {
    product(where: $where) {
      title
      rating {
        rate
        count
      }
      price
      image
      id
      description
      category {
        name
        description
        id
      }
    }
  }
`;
export { GET_PRODUCTS, GET_PRODUCT_BY_ID };
