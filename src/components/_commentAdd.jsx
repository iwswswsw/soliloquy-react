import React, { useState } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  text-align: center;
  margin: 20px auto;
`;

const InputText = styled.input.attrs({ type: 'text' })`
  width: 400px;
`;

const ButtonAdd = styled.button`
  margin-left: 10px;
`;

export default ({addComment}) => {
  const [comment, setComment] = useState('');

  const handleChangeText = (e) => {
    setComment(e.target.value);
  };

  const handleButton = (e) => {
    e.preventDefault();
    addComment(comment);
    setComment('');
  };

  return (
    <Root>
      <form>
        <InputText value={comment} onChange={handleChangeText} />
        <ButtonAdd type="submit" onClick={handleButton}>呟く</ButtonAdd>
      </form>
    </Root>
  );
};
