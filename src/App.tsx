import * as React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

export type ViewProps = {
  count: number;
};

export type ActionProps = {
  onAddClick: () => void;
  onSubClick: () => void;
};

type Props = ViewProps & ActionProps;

const StyledHeader = styled.h1`
  text-align: center;
  margin: 10px;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin: 5px;
  }
`;

export const App = ({ count, onAddClick, onSubClick }: Props) => (
  <>
    <StyledHeader>Count: {count}</StyledHeader>
    <StyledDiv>
      {/* tslint:disable no-console */}
      <Button onClick={onAddClick}> + </Button>
      <Button onClick={onSubClick}> - </Button>
    </StyledDiv>
  </>
);
