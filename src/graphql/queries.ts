import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      continent {
        name
      }
      languages {
        name
      }
    currency
    phone
    states {
      name
    }
    emoji
  }
  }
`;
