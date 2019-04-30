import * as React from "react";
import { Article } from "../../../../modules/article";
import { Banner } from "./Banner";
import { Sidebar } from "./Sidebar";
import { ArticleList } from "./ArticleList";

export type ViewProps = {
  articles: Article[];
  loading: boolean;
};

export type ActionProps = {};

type Props = ViewProps & ActionProps;

export const Home: React.FC<Props> = ({ articles, loading }) => (
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
          {!loading && <ArticleList articles={articles} loading={loading} />}
        </div>
        <Sidebar />
      </div>
    </div>
  </div>
);
