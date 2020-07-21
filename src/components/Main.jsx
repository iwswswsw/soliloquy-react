import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './_header';
import CommentAdd from './_commentAdd';
import Conversation from './_conversation';

const Root = styled.div``;

export const enumWho = {
  user: 0,
  chatbot: 1,
};

const cbComments = ['へぇ〜', 'なるほど', 'いいね', 'やりますねぇ', 'うん']

const getCbComment = () => (cbComments[Math.floor(Math.random() * Math.floor(cbComments.length))]);

export default () => {
  // conversation: {who: enumWho, comment: string}[]
  const [conversations, setConversations] = useState([]);

  const addCbComment = (userConversation) => {
    const cbConversation = { who: enumWho.chatbot, comment: getCbComment() };
    setConversations([...conversations, userConversation, cbConversation]);
  };

  // comment: string
  const addComment = (comment) => {
    const userConversation = { who: enumWho.user, comment };
    setConversations([...conversations, userConversation]);
    setTimeout(() => addCbComment(userConversation), 800);
  };

  return (
    <Root>
      <Header />
      <CommentAdd addComment={addComment} />
      <Conversation conversations={conversations} />
    </Root>
  );
};
