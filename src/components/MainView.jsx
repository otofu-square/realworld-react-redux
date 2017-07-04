// @flow

import React from 'react';

import ArticleList from '../containers/ArticleList';

const MainView = () =>
  <div className="col-md-9">
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        <li className="nav-item">
          <a href="" className="nav-link active">
            Global Feed
          </a>
        </li>
      </ul>
    </div>
    <ArticleList />
  </div>;

export default MainView;
