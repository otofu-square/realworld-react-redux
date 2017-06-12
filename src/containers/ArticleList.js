// @flow

import { connect } from 'react-redux';

import ArticleList from '../components/ArticleList';

const mapStateToProps = state => ({
  articles: state.articles,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
