import { apiClient } from "~/utils/apiClient";
import { Article } from "./types";

type GetResponse = {
  articles: Article[];
  articlesCount: number;
};

export const get = (limit = 10) =>
  apiClient.get(`articles?limit=${limit}`).json<GetResponse>();
