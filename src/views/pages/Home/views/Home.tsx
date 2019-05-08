import * as React from "react";
import { Banner } from "./Banner";
import { Sidebar } from "./Sidebar";
import { ArticleList, Props as ArticleListProps } from "./ArticleList";

type Props = {
  articles: ArticleListProps["articles"];
  loading: ArticleListProps["loading"];
};

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
