import { ArticleAction } from '@/modules/article';
import { UserAction } from '@/modules/user';

export type ReduxAction = ArticleAction | UserAction;
