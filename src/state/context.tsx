import React, { createContext, useReducer, useEffect } from 'react'
import { ToDoReducer } from './reducers'
import { ToDoType, ContextProviderType } from './types'

const localStorageData = JSON.parse(localStorage.getItem('todo') || ' {}')

const toDo =
  Object.keys(localStorageData).length === 0 &&
  localStorageData.constructor === Object
    ? {
        lists: [
          {
            id: 1,
            name: 'Lista Principal',
            tasks: []
          }
        ],
        currentList: 'Lista Principal'
      }
    : localStorageData

const Context = createContext<{
  state: ToDoType
  dispatch: React.Dispatch<any>
}>({
  state: toDo,
  dispatch: () => null
})

const ContextProvider = ({ children }: ContextProviderType) => {
  const [state, dispatch] = useReducer(ToDoReducer, toDo)

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(state))
  }, [state])

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}

export { ContextProvider, Context }
