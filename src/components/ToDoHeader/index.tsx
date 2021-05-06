import React, {useState, useContext} from 'react';
import * as S from './styles';

const ToDoHeader = () => {
  const [newList, setNewList] = useState<boolean>(false)

  const handleNewList = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setNewList((previousValue: boolean) => !previousValue)
  }

  return (
    <S.Wrapper>
      <S.TaskForm >
        <S.TaskInput type="text" placeholder="Descreva a tarefa..." className="inputStyle"/>
        <S.TaskButton>+</S.TaskButton>
      </S.TaskForm>

    {!newList ?  
      <S.Lists>
        <S.ListSelect className="inputStyle">
         <S.Option>Lista Principal</S.Option>
        </S.ListSelect>

        <S.NewListButton onClick={handleNewList}>Nova Lista</S.NewListButton>
      </S.Lists> :

      <S.NewListForm>
        <S.NewListInput placeholder="Digite o nome da lista..." className="inputStyle" ></S.NewListInput>
        <S.NewListAddButton>+</S.NewListAddButton>
        <S.NewListCancelButton onClick={handleNewList}>Cancelar</S.NewListCancelButton>
      </S.NewListForm> }
    </S.Wrapper>
  );
};

export default ToDoHeader;
