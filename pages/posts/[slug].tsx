import type {
    NextPage,
    GetStaticProps,
    GetStaticPaths,
    InferGetStaticPropsType,
} from 'next'
import { useRouter } from 'next/router'
import { getPosts, getPostDetails } from '../../services';

const BlogPost: NextPage = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { query } = useRouter();
    const slug = query.slug;
    return (
        <>
            {post.title}
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

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getPosts();

    return {
        paths: posts.map(({ node: { slug } }) => ({
            params: { slug }
        })),
        fallback: false,
    }
};