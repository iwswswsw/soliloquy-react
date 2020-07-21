import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  height: 70px;
  background-color: #333;
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
`;

const Title = styled.h1`
  font-size: 1.5em;
  margin: auto 30px;
`;

export default () => (
  <Root>
    <Title>ひとりごと</Title>
  </Root>
);
