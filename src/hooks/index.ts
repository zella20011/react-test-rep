import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state";

//

// custom selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// custom dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
