import { createGlobalStyle } from 'styled-components';
import { css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size: 62.5%; 
  }
  html:focus-within {
    scroll-behavior: smooth;
  }
  body {
    ${({ theme }) => css` 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      min-height: 100vh;
      text-rendering: optimizeSpeed;
      line-height: 1.5;
      background: ${theme.blue};
  `}
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
    
  }
  button {
    cursor: pointer;
  }
  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }
  img,
  picture {
    max-width: 100%;
    display: block;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyle;
