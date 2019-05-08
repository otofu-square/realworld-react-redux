import { useMount } from "react-use";
import { articlesOperations } from "../../../modules/articles";
import { useDispatch, useSelector } from "../../../redux";

export const useHooks = () => {
  const dispatch = useDispatch();
  const articles = useSelector(state => state.article.articles);
  const loading = useSelector(state => state.article.loading);

  useMount(() => {
    dispatch(articlesOperations.fetch());
  });

  return { articles, loading };
};
