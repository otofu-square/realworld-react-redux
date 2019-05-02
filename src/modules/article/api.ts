import { client } from "../../utils/client";
import { Article } from "./types";

type GetResponse = {
  articles: Article[];
  articlesCount: number;
};

export const get = (limit = 10) =>
  client.get<GetResponse>(`/articles?limit=${limit}`);
