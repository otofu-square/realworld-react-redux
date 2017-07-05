import { Dispatch } from 'redux';
import { connect, DispatchProp } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import ArticleList from '../components/ArticleList';
import { articleListState, GlobalState } from '../models/state';
import { fetchPostsAsync } from '../actions/articleList';

const mapStateToProps = (state: GlobalState) => ({
  articles: state.articleList.articles,
});

export default compose(
  connect(mapStateToProps),
  lifecycle({
    componentWillMount() {
      (<DispatchProp<{}>>this.props).dispatch(fetchPostsAsync());
    },
  }),
)(ArticleList);
