import React from 'react';
import * as S from './styles';

type ToDoContainerType = {
  children: JSX.Element | JSX.Element[];
}

const ToDoContainer = ({children}: ToDoContainerType) => {
  return (
    <S.Wrapper>{children}</S.Wrapper>
  );
};

export default ToDoContainer;
