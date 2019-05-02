import * as React from "react";
import { branch, compose, renderComponent } from "recompose";
import { useTranslation } from "react-i18next";
import { Article } from "../../../modules/article";
import { ArticlePreview } from "./ArticlePreview";

type Props = {
  articles: Article[];
  loading: boolean;
};

const isLoading = ({ articles }: Props) => !articles;

const isEmpty = ({ articles }: Props) => articles.length === 0;

const Loading: React.FC = () => {
  const { t } = useTranslation();
  return <div className="article-preview">{t("common.loading")}</div>;
};

const Empty: React.FC = () => {
  const { t } = useTranslation();
  return <div className="article-preview">{t("article.empty")}</div>;
};

const List: React.FC<Props> = ({ articles }) => (
  <div>
    {articles.map(article => (
      <ArticlePreview key={`article-${article.title}`} {...article} />
    ))}
  </div>
);

export const ArticleList = compose<Props, Props>(
  branch(isLoading, renderComponent(Loading)),
  branch(isEmpty, renderComponent(Empty))
)(List);
