export const ADD = 'ADD';
export const SUB = 'SUB';

export interface Actions {
  ADD: { type: typeof ADD };
  SUB: { type: typeof SUB };
}

export type Action = Actions[keyof Actions];

export const actions = {
  add: (): Actions['ADD'] => ({ type: ADD }),
  sub: (): Actions['SUB'] => ({ type: SUB }),
};
