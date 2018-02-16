import { compose, lifecycle } from 'recompose';
import { connect, MapStateToProps } from 'react-redux';

import {
  ArticleList as Component,
  ViewProps,
} from '../../components/ArticleList/';
import { ReduxState } from '../../rootReducer';
import { DispatchProp } from '../../store';
import { articleActions } from '../../modules/article';

const mapStateToProps: MapStateToProps<ViewProps, {}, ReduxState> = ({
  article: { articles, loading },
}) => ({
  articles,
  loading,
});

export const ArticleList = compose<{}, {}>(
  connect(mapStateToProps),
  lifecycle<DispatchProp, {}, {}>({
    componentDidMount() {
      const { dispatch } = this.props;
      dispatch!(articleActions.fetch());
    },
  }),
)(Component);
