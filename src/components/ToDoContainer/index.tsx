import React, { useContext } from 'react'
import * as S from './styles'

import { Actions } from '../../state/types'
import { Context } from '../../state/context'

type ToDoContainerType = {
  children: React.ReactNode
}

const ToDoContainer = ({ children }: ToDoContainerType) => {
  const { state, dispatch } = useContext(Context)

  const removeCompleteTasks = () => {
    dispatch({ type: Actions.removeCompleteTasks })
  }

  const removeList = () => {
    dispatch({ type: Actions.removeList })
  }

  return (
    <S.Wrapper>
      {children}
      <S.WrapperControls>
        <S.RemoveCompleteTasks onClick={removeCompleteTasks}>
          Remover tarefas completas
        </S.RemoveCompleteTasks>
        {state.currentList !== 'Lista Principal' && (
          <S.RemoveList onClick={removeList}>Remover Lista</S.RemoveList>
        )}
      </S.WrapperControls>
    </S.Wrapper>
  )
}

export default ToDoContainer
