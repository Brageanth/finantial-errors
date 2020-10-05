import React, { createContext, useReducer } from "react";
import Reducer, { StateProps } from "./../utils/reducer";

interface ContextProps {
  state: StateProps;
  dispatch: ({ type }: { type: string }) => void;
}

export const AdminStore = React.createContext({} as ContextProps);

const initialState = { videos: [], comments: [] };

const Store = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return <React.Fragment />;
};

export const Context = createContext(initialState);
export default Store;
