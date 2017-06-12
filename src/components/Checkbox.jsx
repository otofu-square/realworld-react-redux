// @flow

import React from 'react';

type Props = {
  checked: boolean,
};

const Checkbox = ({ checked }: Props) => <input type="checkbox" checked={checked} />;

export default Checkbox;
