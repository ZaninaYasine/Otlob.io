import gql from "graphql-tag";

export const GET_LANGUAGE = gql`
  {
    language @client
  }
`;

export const GET_USER = gql`
  {
    user @client {
      userInfo {
        __typename
        fullname
        address
      }
    }
  }
`;

export const GET_CART = gql`
  {
    cart @client {
      list {
        products {
          name
          description
          image
          price
          rating
          __typename
        }
        size
        quantity
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  {
    categories @client {
      name
      description
      image
      status
      products {
        name
        description
        image
        price
        rating
        __typename
      }
      __typename
    }
  }
`;
