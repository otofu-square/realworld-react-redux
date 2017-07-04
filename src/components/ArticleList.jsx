// @flow

import React from 'react';

import ArticlePreview from './ArticlePreview';

type Props = {
  articles: Array,
};

const ArticleList = ({ articles }: Props) => {
  if (!articles) return <div className="article-preview">Loading...</div>;
  if (articles.length === 0) {
    return <div className="article-preview">No articles are here... yet.</div>;
  }
  return (
    <div>
      {articles.map(article => <ArticlePreview article={article} key={article.slug} />)}
    </div>
  );
};

export default ArticleList;
