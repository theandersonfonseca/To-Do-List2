import React, {useState, useContext, useRef, useEffect} from 'react';
import * as S from './styles';

import {Context} from '../../state/context'
import {Actions} from '../../state/types'

const ToDoHeader = () => {
  const [newList, setNewList] = useState<boolean>(false)

  const [inputNewList, setInputNewList] = useState<string>('')
  const inputNewListRef = useRef<HTMLInputElement>(null)

  const [inputNewTask, setInputNewTask] = useState<string>('')
  const inputNewTaskRef = useRef<HTMLInputElement>(null)

  const { state, dispatch } = useContext(Context)

  useEffect(() => {
    if (!newList) return

    inputNewListRef.current?.focus()
  }, [newList])


  const handleNewList = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setNewList((previousValue: boolean) => !previousValue)
    setInputNewList('')
  }

  const addList = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (inputNewList.trim().length === 0) return

    dispatch({type: Actions.addList, payload: inputNewList})
    //setCurrentList(inputNewListRef.current?.value)
    
    setInputNewList('')
    setInputNewTask('')
    setNewList(false) 
    inputNewTaskRef.current?.focus()
  }

  const addTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (inputNewTask.trim().length === 0) return

    dispatch({type: Actions.addTask, payload: inputNewTask})
    setInputNewTask('')

    inputNewTaskRef.current?.focus()
  }

  const setCurrentList = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLSelectElement
    dispatch({type: Actions.selectList, payload: target.value})
  }

  return (
    <S.Wrapper>
      <S.TaskForm >
        <S.TaskInput 
        value={inputNewTask} 
        onChange={(e) => setInputNewTask(e.target.value)} 
        ref={inputNewTaskRef} 
        type="text" 
        placeholder="Descreva a tarefa..." 
        className="inputStyle"
        />
        
        <S.TaskButton onClick={addTask}>+</S.TaskButton>
      </S.TaskForm>

    {!newList ?  
      <S.Lists>
        <S.ListSelect className="inputStyle" value={state.currentList} onChange={setCurrentList}>
          {state.lists.map(list => <S.Option key={list.id}>{list.name}</S.Option>)}
        </S.ListSelect>

        <S.NewListButton onClick={handleNewList}>Nova Lista</S.NewListButton>
      </S.Lists> :

      <S.NewListForm>
        <S.NewListInput value={inputNewList} 
        onChange={(e) => setInputNewList(e.target.value)} 
        ref={inputNewListRef} 
        placeholder="Digite o nome da lista..." 
        className="inputStyle"
        />

        <S.NewListAddButton onClick={addList}>+</S.NewListAddButton>

        <S.NewListCancelButton onClick={handleNewList}>Cancelar</S.NewListCancelButton>
      </S.NewListForm> }
    </S.Wrapper>
  );
};

export default ToDoHeader;
