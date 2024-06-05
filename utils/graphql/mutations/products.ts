import { gql } from '@apollo/client';
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