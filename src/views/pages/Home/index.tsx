import * as React from "react";
import { Home } from "./views";
import { useHooks } from "./hooks";

export const HomeContainer: React.FC = () => {
  const { articles, loading } = useHooks();
  return <Home articles={articles} loading={loading} />;
};
