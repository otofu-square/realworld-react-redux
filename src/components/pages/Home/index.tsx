import * as React from 'react';
import { translate, InjectedTranslateProps } from 'react-i18next';

import { Banner } from './Banner';
import { Sidebar } from './Sidebar';
import { ArticleList } from './ArticleList';
import { Article } from '../../../modules/article';

export type ViewProps = {
  articles: Article[];
  loading: boolean;
};
export type ActionProps = {};
type Props = ViewProps & ActionProps;
type ComposedProps = Props & InjectedTranslateProps;

const Component = ({ articles, loading, t }: ComposedProps) => (
  <div className="home-page">
    <Banner />
    <div className="container page">
      <div className="row">
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
          <ArticleList articles={articles} loading={loading} />
        </div>
        <Sidebar />
      </div>
    </div>
  </div>
);

export const Home = translate()(Component);
