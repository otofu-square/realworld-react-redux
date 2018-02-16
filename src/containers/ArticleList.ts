import { connect } from 'react-redux';

import { ArticleList as Component } from '../components/ArticleList/';

const mapStateToProps = () => ({
  articles: [
    {
      title: 'article 1',
    },
    {
      title: 'article 2',
    },
  ],
});

const mapDispatchToProps = () => ({});

export const ArticleList = connect(mapStateToProps, mapDispatchToProps)(
  Component,
);
