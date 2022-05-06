import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Layout from '../../src/components/layout/Layout';

const BlogPost: NextPage = () => {
    const { query } = useRouter();
    const postId = query.postId;

    return (
        <Layout>
            Blog post { postId } details
        </Layout>
    )
}

export default BlogPost