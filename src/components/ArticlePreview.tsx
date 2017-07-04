import * as React from 'react';

import { Article } from '../models/article';

interface Props {
  article: Article;
}

const ArticleList: React.StatelessComponent<Props> = ({ article }) =>
  <div className="article-preview">
    <div className="article-meta">
      <a href="">
        <img src={article.author.image} alt="" />
      </a>
      <div className="info">
        <a href="" className="author">
          {article.author.username}
        </a>
        <span className="date">
          {new Date(article.createdAt).toDateString()}
        </span>
      </div>
      <div className="pull-cs-right">
        <button className="btn btn-sm btn-outline-primary">
          <i className="ion-heart" /> {article.favoritesCount}
        </button>
      </div>
    </div>
    <a href={`article/${article.slug}`} className="preview-link">
      <h1>
        {article.title}
      </h1>
      <p>
        {article.description}
      </p>
      <span>Read more...</span>
      <ul className="tag-list">
        {article.tagList.map(tag =>
          <li className="tag-default tag-pill tag-outline" key={tag}>
            {tag}
          </li>,
        )}
      </ul>
    </a>
  </div>;

export default ArticleList;
