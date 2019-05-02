import * as React from "react";
import { useTranslation } from "react-i18next";
import { Article } from "../../../modules/article";
import { ArticlePreview } from "./ArticlePreview";

type Props = {
  articles: Article[];
  loading: boolean;
};

export const ArticleList: React.FC<Props> = ({ articles, loading }) => {
  const { t } = useTranslation();
  const isLoading = loading;
  const isEmpty = articles.length === 0;

  switch (true) {
    case isLoading:
      return <div className="article-preview">{t("common.loading")}</div>;
    case isEmpty:
      return <div className="article-preview">{t("article.empty")}</div>;
    default:
      return (
        <div>
          {articles.map(article => (
            <ArticlePreview key={`article-${article.title}`} {...article} />
          ))}
        </div>
      );
  }
};
