import gql from 'graphql-tag';

export const QUERY_ALL_CONDUCTS = gql`
  query getAllConducts($order: ConductOrderByInput) {
    allConducts(orderBy: $order) {
      id
      description
      title
      order
    }
  }
`;
