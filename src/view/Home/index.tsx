import React, { FC } from "react";
import styled from "styled-components";

// hooks
import { useAppSelector } from "../../hooks";
import { User, AddUser } from "../../components";

const Wrapper = styled.div``;
const AddUserWrapper = styled.div``;

const Home: FC = () => {
  const { users, isLoading, error } = useAppSelector(
    (state) => state.usersReducer,
  );

  return (
    <Wrapper>
      {isLoading && <div>Loading ...</div>}
      {!isLoading &&
        users.map((user) => (
          <User key={user.id} data={user} />
        ))}
      {error && <h1>{error}</h1>}
      {!isLoading && !error && <AddUser />}
    </Wrapper>
  );
};

export default Home;
