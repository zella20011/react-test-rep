import React, { useEffect } from "react";

// components
import { Home } from "./view";

// hooks
import { useAppDispatch } from "./hooks";

// actions
import { fetchUsers } from "./state/users/actions";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <Home />;
}

export default App;
