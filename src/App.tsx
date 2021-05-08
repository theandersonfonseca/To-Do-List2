import React from 'react';
import {ContextProvider} from './state/context'

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

import ToDoContainer from './components/ToDoContainer';
import Header from './components/Header';
import ToDoHeader from './components/ToDoHeader';
import Tasks from './components/Tasks';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <ContextProvider>
          <Header/>
          <ToDoContainer>
            <ToDoHeader/>
            <Tasks/>
          </ToDoContainer>
        </ContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
