import gql from "graphql-tag";

const ARTICLES_QUERY = gql`  
  query Posts {
    posts {
      id
      title
      category {
        id
        name
      }
      image {
        url
      }
    }
  }
`;

export default ARTICLES_QUERY;  