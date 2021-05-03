import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 20rem;
    width: 100%;
    max-width: 100%;
    background: ${theme.gray};
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    padding: 1.5rem;
    font-size: 5rem;
    color: ${theme.dark};
  `}
`;
