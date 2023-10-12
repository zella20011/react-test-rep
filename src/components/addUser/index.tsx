import { FC, useState } from "react";
import styled from "styled-components"

//reducer
import { addUser } from '../../state/users/reducer'

// hooks
import { useAppDispatch } from "../../hooks";

const Wrapper = styled.div``;
const FlexBox = styled.div`
  display: flex;
`;

const AddUser: FC = () => {
  const [newName, setNewName] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleAddNewUser = () => {
    if (!newName) return

    console.log({newName});
    dispatch(addUser(newName))
  }

  return (
    <Wrapper>
      <h2>Add new User</h2>
      <FlexBox>
        <span>name:</span>
        <input type="text" onChange={({target: {value}}) => setNewName(value)} />
        <button onClick={handleAddNewUser}>add new user</button>
      </FlexBox>
    </Wrapper>
  );
}

export default AddUser;