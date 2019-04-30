import * as React from "react";
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { push } from "react-router-redux";
import { ViewProps, ActionProps } from "../components";
import { ReduxState } from "../../../../types/redux";

type OwnProps = {
  children: React.ReactNode;
};

const mapStateToProps: MapStateToProps<ViewProps, OwnProps, ReduxState> = (
  _,
  { children }
) => ({
  children
});

const mapDispatchToProps: MapDispatchToProps<
  ActionProps,
  OwnProps
> = dispatch => ({
  onLogoClick: () => {
    dispatch(push("/"));
  },
  onHomeClick: () => {
    dispatch(push("/"));
  },
  onLoginClick: () => {
    dispatch(push("/login"));
  }
});

export const container = connect(
  mapStateToProps,
  mapDispatchToProps
);
