import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// actions
import { fetchUsers } from "./actions";

// types
import { UserType } from '../../types'

export interface UsersState {
  users: UserType[];
  isLoading: boolean;
  error: string;
}

const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<string>) => {
      console.log({action});
      state.users.push({id: Math.random(), name: action.payload})
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      console.log({action});
      
      state.users = state.users.filter(item => item.id !== action.payload )
    }
  },
  extraReducers: {
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<UserType[]>) => {
      state.isLoading = false;
      state.error = "";
      state.users = action.payload;
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.users = [];
    },
  },
});

// const {}

// actions
export const { addUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
