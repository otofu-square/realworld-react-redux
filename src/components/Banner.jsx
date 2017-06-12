// @flow

import React from 'react';

type Props = {
  appName: string,
};

const Banner = ({ appName }: Props) =>
  <div className="banner">
    <div className="container">
      <h1 className="logo-font">
        {appName.toLowerCase()}
      </h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>;

export default Banner;
