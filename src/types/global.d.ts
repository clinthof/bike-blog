export { };

declare global {
  type Post = {
    cursor: string;
    node: {
      author: {
        name: string;
      };
      categories: {
        name: string;
        slug: string;
      };
      createdAt: Date;
      excerpt: string;
      featuredImage: {
        url: string;
      };
      featuredPost: boolean;
      slug: string;
      title: string;
    };
  };
}