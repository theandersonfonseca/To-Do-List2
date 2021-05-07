import React, { createContext, useReducer } from 'react';
import {ToDoReducer} from './reducers'
import {ToDoType, ContextProviderType} from './types'

const toDo = {
  lists: [{
    id: 1,
    name: 'Lista Principal',
    tasks: []
  }],
  currentList: 'Lista Principal'
}

const Context = createContext<{
  state: ToDoType;
  dispatch: React.Dispatch<any>;
}>({
  state: toDo,
  dispatch: () => null
});

const ContextProvider = ({ children }: ContextProviderType) => {
  const [state, dispatch] = useReducer(ToDoReducer, toDo);

  return (
    <Context.Provider value={{state, dispatch}}>
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context };