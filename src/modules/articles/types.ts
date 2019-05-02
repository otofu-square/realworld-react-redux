type Author = {
  username: string;
  bio: string | null;
  image: string;
  following: boolean;
};

export type Article = {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: string[];
  description: string;
  author: Author;
  favorited: boolean;
  favoritesCount: number;
};
