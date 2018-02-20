import * as React from 'react';
import { branch, compose, renderComponent } from 'recompose';
import { translate, InjectedTranslateProps } from 'react-i18next';

import { ArticlePreview } from './ArticlePreview';
import { Article } from '../../../../modules/article';

type Props = {
  articles: Article[];
  loading: boolean;
};
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
    {articles.map(article => (
      <ArticlePreview key={`article-${article.title}`} {...article} />
    ))}
  </div>
);

export const ArticleList = compose<Props, Props>(
  translate(),
  branch(isLoading, renderComponent(Loading)),
  branch(isEmpty, renderComponent(Empty)),
)(List);
