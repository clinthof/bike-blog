import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const BlogPost: NextPage = () => {
    const { query } = useRouter();
    const postId = query.postId;

    return (
        <div>
            Blog post { postId } details
        </div>
    )
}

export default BlogPost