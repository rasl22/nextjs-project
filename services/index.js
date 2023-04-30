import { graphql } from "graphql";
import { request, gql } from "graphql-request";

const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPost = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              id
              name
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            futuredImg {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlApi, query)
  return result.postsConnection.edges
};
