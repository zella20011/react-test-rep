import { FC, useEffect, useState } from "react";
import styled from "styled-components"

// actions
import {deleteUser} from '../../state/users/reducer'

// types
import { UserType } from "../../types";
import { useAppDispatch, useAppSelector } from "../../hooks";

const Wrapper = styled.div`
  display: flex;
  margin: 10px;
  padding: 6px;
  border: 1px solid #000;
`;

const User: FC<{data: UserType}> = ({data}) => {
  const [userName, setUserName] = useState<string>(data.name)
  const [isBlocked, setIsBlocked] = useState<boolean>(false)

  const dispatch = useAppDispatch();

  const handlerUserDelete = () => {
    if (isBlocked) return alert('this user is blocked') 

    dispatch(deleteUser(data.id));
  }

  return (
    <Wrapper>
      <div>id: {data.id}</div>
      <div>Name: {userName}</div>
      <input type="text" value={userName} onChange={({target}) => setUserName(target.value)} />
      <div>isBlocked:</div>
      <input type="checkbox" name="isBlocked" id="1" onChange={() => setIsBlocked(prev => !prev)}  />
      <button onClick={handlerUserDelete}>Delete user</button>
    </Wrapper>
  )
}

export default User;
