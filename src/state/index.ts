import { combineReducers, configureStore } from "@reduxjs/toolkit";

// reducers
import usersReducer from "./users/reducer";

const rootReducer = combineReducers({
  usersReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
