import type {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next';
import {useRouter} from 'next/router';
import {getPosts, getPostDetails} from '../../services';

const BlogPost: NextPage = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {query, asPath} = useRouter();
  const slug = query.slug;

  if (!post?.title) {
    return <>Loading...</>;
  }

  return <h1>{post.title}</h1>;
};

export default BlogPost;

export const getStaticProps: GetStaticProps = async ({params}) => {
  let data = null;

  try {
    data = await getPostDetails(params?.slug as string);
  } catch (err) {
    if (typeof err === 'string') {
      console.log(`Error:\n${err.toUpperCase()}`);
    } else if (err instanceof Error) {
      console.log(`Error:\n${err.message}`);
    }
  }

  return {
    props: {post: data},
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();

  return {
    paths: posts.map(({node: {slug}}) => ({
      params: {slug},
    })),
    fallback: false,
  };
};
