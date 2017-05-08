// @flow

import React from 'react'

type Props = {
  articles: Object,
}

const ArticleList = ({ articles }: Props) => {
  if (!articles) {
    return (
      <div className="article-preview">
        Loading...
      </div>
    )
  }

  if (articles.length === 0) {
    return (
      <div className="article-preview">
        No articles are here... yet.
      </div>
    )
  }

  return (
    <div>
      {articles.map(article => <h2>{article.title}</h2>)}
    </div>
  )
}

export default ArticleList
