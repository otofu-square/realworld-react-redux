import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import ArticleList from '../components/ArticleList';
import { articleListState, GlobalState } from '../models/state';
import { fetchPostsAsync } from '../actions/articleList';

const mapStateToProps = (state: GlobalState) => ({
  articles: state.articleList.articles,
});

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  onLoad: () => dispatch(fetchPostsAsync()),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      (<{ onLoad: typeof fetchPostsAsync }>this.props).onLoad();
    },
  }),
)(ArticleList);
