import { gql } from '@apollo/client';

const GET_CATEGORIES = gql`
  query Query {
    categories {
      id
      name
      description
    }
  }
`;

export { GET_CATEGORIES };
