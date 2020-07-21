import React from 'react';
import styled from 'styled-components';
import { enumWho } from './Main';

const Root = styled.div`
  padding: 0 100px;
`;

const ConversationDiv = styled.div`
  background-color: #333;
  border-radius: 4px;
  padding: 20px 30px;
`;

const Comment = styled.p`
  padding: 5px 0;
`;

export default ({conversations}) => (
  <Root>
    <ConversationDiv>
      {
        conversations.map((c, i) => {
          const whoLabel = c.who === enumWho.user ? 'you' : 'chatbot';
          return (<Comment key={i.toFixed()}>{whoLabel}: {c.comment}</Comment>);
        })
      }
    </ConversationDiv>
  </Root>
);
