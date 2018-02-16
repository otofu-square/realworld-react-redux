import { CounterAction } from './modules/counter';
import { ArticleAction } from './modules/article';

export type ReduxAction = CounterAction | ArticleAction;
