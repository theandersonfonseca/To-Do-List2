import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    padding: 1.5rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background: ${theme.gray};
    border-bottom: solid 0.2rem ${theme.gray};
    font-size: 1.5rem;

    .inputStyle {
      padding: 1rem;
      outline: none;
      max-width: 100%;
      border: none;
      background: inherit;
      border-bottom: .2rem solid ${theme.dark};
    }

    @media(max-width: 900px) {
      flex-direction: column;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    margin-left: 1.5rem;
    padding: 0.8rem 1rem;
    border: none;
    outline: none;
    text-transform: uppercase;
    cursor: pointer;
    color: ${theme.white};
    font-weight: 600;
    transition: 0.4s;
    border-radius: 0.4rem;
  `}
`

export const TaskForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    max-width: 100%;
  `}
`
export const TaskInput = styled.input`
  ${({ theme }) => css`
    width: 35rem;
  `}
`

export const TaskButton = styled(Button)`
  ${({ theme }) => css`
    background: ${theme.green};
  `}
`
export const Lists = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    @media(max-width: 900px) {
      margin-top: 3rem;
    }

    @media(max-width: 450px) {
      flex-direction: column; 
    }
  `}
`
export const ListSelect = styled.select`
  ${({ theme }) => css`
    width: 25rem;
    color: ${theme.dark};
    font-size: 1.8rem;
    font-weight: 600;
    cursor: pointer;
  `}
`

export const Option = styled.option`
  ${({ theme }) => css`
    padding: 1rem;
    background: ${theme.gray};
  `}
`

export const NewListButton = styled(Button)`
  ${({ theme }) => css`
    background: ${theme.dark};

    @media(max-width: 450px) {
      margin-top: 3rem; 
    }
  `}
`

export const NewListForm = styled.form`
  ${({ theme }) => css`
    display: flex;

    @media(max-width: 900px) {
      margin-top: 3rem;
    }

    @media(max-width: 450px) {
      flex-direction: column; 
    }
  `}
`
export const NewListInput = styled.input`
  ${({ theme }) => css`
    width: 25rem;
  `}
`

export const NewListAddButton = styled(Button)`
  ${({ theme }) => css`
    background: ${theme.dark};
    margin-top: 1.5rem;
  `}
`

export const NewListCancelButton = styled(Button)`
  ${({ theme }) => css`
    background: ${theme.red};
    margin-top: 1.5rem;
  `}
`

