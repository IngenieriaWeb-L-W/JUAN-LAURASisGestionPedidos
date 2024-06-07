
import { gql } from '@apollo/client';

export const UPSERT_PRODUCT = gql`
  mutation Mutation(
    $where: ProductWhereUniqueInput!
    $create: ProductCreateInput!
    $update: ProductUpdateInput!
  ) {
    upsertOneProduct(where: $where, create: $create, update: $update) {
      id
      title
      price
      image
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteOneProduct($where: ProductWhereUniqueInput!) {
    deleteOneProduct(where: $where) {
      id
    }
  }
`;

export const CREATE_MANY_PRODUCTS = gql`
  mutation Mutation($data: [ProductCreateManyInput!]!) {
    createManyProduct(data: $data) {
      count
    }
  }
`;
/* import { gql } from '@apollo/client';

export const UPSERT_PRODUCT = gql`
  mutation UpsertOneProduct(
    $where: ProductWhereUniqueInput!
    $create: ProductCreateInput!
    $update: ProductUpdateInput!
  ) {
    upsertOneProduct(where: $where, create: $create, update: $update) {
      title
      rating {
        rate
        id
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

export const DELETE_PRODUCT = gql`
  mutation Mutation($where: ProductWhereUniqueInput!){
    deleteOneProduct(where: $where){
      id
    }
  }
  `; */