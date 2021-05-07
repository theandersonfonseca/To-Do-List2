import {uniqueID} from '../utils/uniqueID'
import {ToDoType, Actions, ActionsType} from './types'

export const ToDoReducer = (state: ToDoType, action: ActionsType) => {
  switch(action.type) {
    case Actions.selectList:
      return {...state, currentList: action.payload}

    case Actions.addList: 
      return {currentList: action.payload, lists: [...state.lists, {
        id: uniqueID(),
        name: action.payload,
        tasks: []
      }]}

    case Actions.removeList:
      return {currentList: 'Lista Principal', lists: state.lists.filter(list => list.name !== state.currentList
      )}
      
    case Actions.completeTask: 
      return {...state, lists: state.lists.map(list => {
        if (list.name === state.currentList) {
          return {...list, tasks: list.tasks.map(task => {
            if (task.description === action.payload) {
              return {
                ...task,
                complete: !task.complete
              }
            }

            return task
          })}
        }
        
        return list
      })}

    case Actions.addTask: 
      return {...state, lists: state.lists.map(list => {
        if (list.name === state.currentList) {
          return {...list, tasks: [...list.tasks, {
            id: uniqueID(), 
            description: action.payload, 
            complete: false
          }]}
        }

        return list
      })}

    case Actions.editTask:
      return {...state, lists: state.lists.map(list => {
        if (list.name === state.currentList) {
          return {...list, tasks: list.tasks.map(task => {
            if (task.description === action.payload) {
              return {
                ...task,
                description: action.payload
              }
            }

            return task
          })}
        }

        return list
      })}

    case Actions.removeTask:
      return {...state, lists: state.lists.map(list => {
        if (list.name === state.currentList) {
          return {...list, tasks: list.tasks.filter(task => task.description !== action.payload)}
        }

        return list
      })}

    case Actions.removeCompleteTasks:
      return {...state, lists: state.lists.map(list => {
        if (list.name === state.currentList) {
          return {...list, tasks: list.tasks.filter(task => !task.complete)}
        }

        return list
      })}
      
    default:
      return state
  }
}