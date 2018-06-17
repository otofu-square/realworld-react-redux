import { compose, lifecycle } from 'recompose';
import { connect, MapStateToProps } from 'react-redux';
import { Home as Component, ViewProps } from '../components';
import { articleActions } from '@/modules/article';
import { ReduxState, DispatchProp } from '@/types/redux';

const mapStateToProps: MapStateToProps<ViewProps, {}, ReduxState> = ({
  article: { articles, loading },
}) => ({
  articles,
  loading,
});

export const Home = compose<{}, {}>(
  connect(mapStateToProps),
  lifecycle<DispatchProp, {}, {}>({
    componentDidMount() {
      const { dispatch } = this.props;
      dispatch!(articleActions.fetch());
    },
  }),
)(Component);
