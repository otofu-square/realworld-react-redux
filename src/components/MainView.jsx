// @flow

import React from 'react'

import ArticleList from './ArticleList'

type Props = {
  articles: Array
}

const MainView = ({ articles }: Props) =>
  <div className="col-md-9">
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        <li className="nav-item">
          <a
            href=""
            className="nav-link active"
          >
            Global Feed
          </a>
        </li>
      </ul>
    </div>

    <ArticleList articles={articles} />
  </div>

export default MainView
