import { compose, lifecycle } from "recompose";
import { connect, MapStateToProps } from "react-redux";
import { articleActions } from "../../../../modules/article";
import { ReduxState, DispatchProp } from "../../../../types/redux";
import { ViewProps } from "../components";

const mapStateToProps: MapStateToProps<ViewProps, {}, ReduxState> = ({
  article: { articles, loading }
}) => ({
  articles,
  loading
});

export const container = compose<ViewProps, ViewProps>(
  connect(mapStateToProps),
  lifecycle<DispatchProp, {}, {}>({
    componentDidMount() {
      const { dispatch } = this.props;
      dispatch!(articleActions.fetch());
    }
  })
);
