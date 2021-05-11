export type ToDoType = {
  lists: ListType[]
  currentList: string
}

export type ListType = {
  id: number,
  name: string, 
  tasks: TaskType[]
}

export type TaskType = {
  id: number,
  description: string,
  complete: boolean,
  editing: boolean
}

export enum Actions {
  selectList = 'SELECT_LIST',
  addList = 'ADD_LIST',
  removeList = 'REMOVE_LIST',
  addTask = 'ADD_TASK',
  completeTask = 'COMPLETE_TASK',
  editingTask = 'EDITING_TASK',
  editTask = 'EDIT_TASK',
  removeTask = 'REMOVE_TASK',
  removeCompleteTasks = 'REMOVE_COMPLETE_TASKS',
}

export type ActionsType = 
  | { type: Actions.selectList; payload: string}
  | { type: Actions.addList; payload: string}
  | { type: Actions.removeList}
  | { type: Actions.addTask; payload: string}
  | { type: Actions.completeTask; payload: string}
  | {type: Actions.editingTask; payload: string}
  | { type: Actions.editTask; payload: {oldValue: string, newValue: string}}
  | { type: Actions.removeTask; payload: string}
  | { type: Actions.removeCompleteTasks};
  
export type ContextProviderType = {
  children: React.ReactNode
}