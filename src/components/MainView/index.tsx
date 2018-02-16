import * as React from 'react';

import { ArticleList } from '../../containers/ArticleList';

export const MainView = () => {
  return (
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
    </div>
  );
};
