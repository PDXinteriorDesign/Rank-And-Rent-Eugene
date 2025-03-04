
export type BlogPost = {
  title: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
};

export type BlogPosts = {
  [key: string]: BlogPost;
};
