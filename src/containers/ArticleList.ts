import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import ArticleList from '../components/ArticleList';
import { articleListState as State } from '../models/state';
import { fetchPostsAsync } from '../actions/articleList';

const mapStateToProps = (state: State) => ({
  articles: state.articles,
});

const mapDispatchToProps = (dispatch: Dispatch<State>) => ({
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
