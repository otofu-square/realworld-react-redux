import * as React from 'react';
import { branch, compose, renderComponent } from 'recompose';
import { translate, InjectedTranslateProps } from 'react-i18next';

type ViewProps = {
  articles: {
    title: string;
  }[];
};
type ActionProps = {};
type Props = ViewProps & ActionProps;
type ComposedProps = Props & InjectedTranslateProps;

const isLoading = ({ articles }: Props) => !articles;

const isEmpty = ({ articles }: Props) => articles.length === 0;

const Loading = ({ t }: ComposedProps) => (
  <div className="article-preview">{t('common.loading')}</div>
);

const Empty = ({ t }: ComposedProps) => (
  <div className="article-preview">{t('article.empty')}</div>
);

const List = ({ articles }: Props) => (
  <div>
    {articles.map(({ title }) => <h2 key={`article-${title}`}> {title}</h2>)}
  </div>
);

export const ArticleList = compose<Props, Props>(
  translate(),
  branch(isLoading, renderComponent(Loading)),
  branch(isEmpty, renderComponent(Empty)),
)(List);
