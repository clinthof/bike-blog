import type {
    NextPage,
    GetStaticProps,
    InferGetStaticPropsType,
} from 'next'
import { useRouter } from 'next/router'
import { getPosts, getPostDetails } from '../../services';
import { PostContainer } from '../../src/containers/post';

const BlogPost: NextPage = () => {
    const { query } = useRouter();
    const postId = query.postId;

    return (
        <>
        </>
    )
}

export default BlogPost;

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const data = await getPostDetails(params?.slug as string);

    return {
        props: { post: data }
    }
};

export const getStaticPaths = async () => {
    const posts = await getPosts();

    return {
        paths: posts.map(({ node: { postId } }) => ({
            params: { postId }
        })),
        fallback: false,
    }
};