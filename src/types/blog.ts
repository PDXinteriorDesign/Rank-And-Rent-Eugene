
export type BlogPost = {
  title: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  category: string;
  image?: string;
  url?: string;
};

export type BlogPosts = {
  [key: string]: BlogPost;
};
