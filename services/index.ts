import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string;

const getPosts = async () => {
  const query = gql`
    query FetchPosts {
      postsConnection {
        edges {
          cursor
          node {
            author {
              name
            }
            categories {
              name
              slug
            }
            createdAt
            excerpt
            featuredImage {
              url
            }
            featuredPost
            slug
            title
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

const getPostDetails = async (slug: string) => {
  const query = gql`
    query getPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        author {
          name
          id
        }
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
        content {
          raw
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

const getRecentPosts = async () => {
  const query = gql`
    query getPosts() {
      posts(
        orderBy: createdAt_DESC
        first: 3
      ) {
        title
        slug
        }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

export {
  getPosts, 
  getPostDetails,
  getRecentPosts,
}