import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMount } from "react-use";
import { Banner } from "./Banner";
import { Sidebar } from "./Sidebar";
import { ArticleList } from "./ArticleList";
import { articlesOperations } from "../../../modules/articles";
import { ReduxState } from "../../../redux";

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state: ReduxState) => state.article.articles);
  const loading = useSelector((state: ReduxState) => state.article.loading);

  useMount(() => {
    dispatch(articlesOperations.fetch());
  });

  return (
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
};
