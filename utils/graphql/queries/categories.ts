import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query Query {
    categories {
      name
      id
      description
    }
  }
`;