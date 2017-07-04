// @flow

import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import ArticleList from '../components/ArticleList';
import { fetchPostsAsync } from '../actions/articleList';

const mapStateToProps = state => ({
  articles: state.articles,
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(fetchPostsAsync()),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      /* eslint-disable immutable/no-this */
      this.props.onLoad();
    },
  }),
)(ArticleList);
