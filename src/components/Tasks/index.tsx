import React, { useState, useContext } from 'react'

import { Context } from '../../state/context'
import { Actions } from '../../state/types'

import * as S from './styles'

const Tasks = () => {
  const [inputEditingValue, setInputEditingValue] = useState<string>('')
  const [taskValueToEdit, setTaskValueToEdit] = useState<string>('')

  const { state, dispatch } = useContext(Context)

  const showTaskEdit = (taskValueToEdit: string) => {
    setTaskValueToEdit(taskValueToEdit)
    dispatch({ type: Actions.editingTask, payload: taskValueToEdit })
  }

  const handleCheckTask = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement
    const description = target.nextElementSibling?.innerHTML

    dispatch({ type: Actions.completeTask, payload: description })
  }

  const removeTask = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement
    const description = target.parentElement?.previousElementSibling?.innerHTML

    dispatch({ type: Actions.removeTask, payload: description })
  }

  const handleTaskEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (inputEditingValue.trim().length === 0) {
      dispatch({ type: Actions.editingTask, payload: taskValueToEdit })
      return
    }

    dispatch({
      type: Actions.editTask,
      payload: { oldValue: taskValueToEdit, newValue: inputEditingValue }
    })
    dispatch({ type: Actions.editingTask, payload: inputEditingValue })
    setInputEditingValue('')
  }

  return (
    <S.Wrapper>
      {state.lists
        .find((list) => list.name === state.currentList)
        ?.tasks.map((task) => (
          <S.Task key={task.id}>
            {!task.editing ? (
              <>
                <S.Check
                  className={task.complete ? 'checked' : ''}
                  onClick={handleCheckTask}
                >
                  {task.complete ? (
                    <S.CheckIcon className="far fa-check"></S.CheckIcon>
                  ) : (
                    ''
                  )}
                </S.Check>

                <S.Description className={task.complete ? 'checked' : ''}>
                  {task.description}
                </S.Description>

                <S.Controls>
                  {!task.complete && (
                    <S.Edit
                      className="fas fa-edit"
                      onClick={() => showTaskEdit(task.description)}
                    ></S.Edit>
                  )}
                  <S.Remove
                    className="fas fa-trash"
                    onClick={removeTask}
                  ></S.Remove>
                </S.Controls>
              </>
            ) : (
              <S.EditTaskForm onSubmit={handleTaskEdit}>
                <S.EditTaskInput
                  placeholder="Descreva a Tarefa..."
                  value={inputEditingValue}
                  onChange={(e) => setInputEditingValue(e.target.value)}
                />
              </S.EditTaskForm>
            )}
          </S.Task>
        ))}
    </S.Wrapper>
  )
}

export default Tasks
