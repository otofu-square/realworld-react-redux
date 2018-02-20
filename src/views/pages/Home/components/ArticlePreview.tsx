import * as React from 'react';

import { Article } from '@/modules/article';

type Props = Article;

export const ArticlePreview = ({
  author,
  createdAt,
  favoritesCount,
  slug,
  title,
  description,
  tagList,
}: Props) => (
  <div className="article-preview">
    <div className="article-meta">
      <a>
        <img src={author.image} />
      </a>
      <div className="info">
        <a className="author">{author.username}</a>
        <span className="date">{new Date(createdAt).toDateString()}</span>
      </div>
      <div className="pull-xs-right">
        <button className="btn btn-sm btn-outline-primary">
          <i className="ion-heart" /> {favoritesCount}
        </button>
      </div>
    </div>
    <a href={`./article/${slug}`} className="preview-link">
      <h1>{title}</h1>
      <p>{description}</p>
      <span>Read more...</span>
      <ul className="tag-list">
        {tagList.map(tag => {
          return (
            <li className="tag-default tag-pill tag-outline" key={tag}>
              {tag}
            </li>
          );
        })}
      </ul>
    </a>
  </div>
);
