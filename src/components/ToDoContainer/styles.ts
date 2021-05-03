import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    width: 75%;
    max-width: 100%;
    height: calc(100vh - 20.5rem);
    margin: 5rem auto;
    padding-bottom: 6rem;
    background: ${theme.white};
    position: relative;

    @media(max-width: 1200px) {
      width: 95%;
    }

    @media(max-width: 600px) {
      height: auto;
    }
  `}
`;
