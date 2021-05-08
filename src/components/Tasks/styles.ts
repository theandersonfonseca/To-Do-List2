import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 3rem;
    height: calc(100% - 11rem);
    overflow-y: scroll; 

    ::-webkit-scrollbar-track {
      background-color: ${theme.white};
    }
    ::-webkit-scrollbar {
      width: 0.5rem;
      background: ${theme.dark};
    }
    ::-webkit-scrollbar-thumb {
      background: ${theme.dark};
    }

    @media(max-width: 600px) {
      padding: 1.5rem;
      overflow-y: auto;
    }
  `}
`;

export const Task = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    border-bottom: solid 0.1rem ${theme.gray};
    padding: 2rem 0;
  `}
`;

export const Check = styled.span`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 2rem;
    min-height: 2rem;
    border: solid 0.1rem ${theme.dark};
    border-radius: 50%;
    cursor: pointer;

    &.checked {
      background: ${theme.green};
      border: solid 0.1rem ${theme.white};
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
      display: inline-block;
      margin-left: 3rem;
      color: ${theme.dark};
      word-break: break-word;  
      font-size: 1.6rem;

      &.checked {
        text-decoration: line-through;
        color: ${theme.gray};
      }

      @media(max-width: 600px) {
        margin-left: 1.5rem;
      }
  `}
`;

export const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

export const Edit = styled.i`
  ${({ theme }) => css`
    cursor: pointer;
    transition: 0.4s;
    font-size: 1.6rem;
    margin-left: 3rem;
    color: ${theme.blue};
  `}
`;

export const Remove = styled.i`
  ${({ theme }) => css`
    cursor: pointer;
    transition: 0.4s;
    font-size: 1.6rem;
    margin-left: 1.5rem;
    color: ${theme.red};
  `}
`;

export const CheckIcon = styled.i`
  ${({ theme }) => css`
    cursor: pointer;
    font-size: 1.6rem;
    color: ${theme.white};
    pointer-events: none;
  `}
`;

export const EditTaskForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    align-self: center;
    height: 2.4rem;
    max-width: 100%;
    color: ${theme.blue};
  `}
`;

export const EditTaskInput = styled.input`
  border: none;
  outline: none;
  width: 85rem;
  padding: 0 1.5;
  font-size: 1.6rem;
`