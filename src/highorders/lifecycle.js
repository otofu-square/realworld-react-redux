// @flow

import { createClass } from 'react';

export const withLifeCycle = spec => BaseComponent =>
  createClass({
    ...spec,
    render() {
      return BaseComponent();
    },
  });
