import * as React from 'react';
import { DispatchProp } from 'react-redux';

import { Article } from '../models/article';
import ArticlePreview from './ArticlePreview';

interface StateProps {
  articles: Array<Article>;
}

const ArticleList: React.StatelessComponent<StateProps> = ({ articles }) => {
  if (!articles) return <div className="article-preview">Loading...</div>;
  if (articles.length === 0) {
    return <div className="article-preview">No articles are here... yet.</div>;
  }
  return (
    <div>
      {articles.map((article: Article) =>
        <ArticlePreview article={article} key={article.slug} />,
      )}
    </div>
  );
};

export default ArticleList;
