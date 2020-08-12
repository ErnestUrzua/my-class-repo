import React, { createContext, useReducer, useContext } from "react";

const formContext = createContext();
const listContext = createContext();
const { Provider } = {formContext,listContext};

const reducer = (state, action) => {

};

const CountProvider = ({ value = 0, ...props }) => {
  const [state, dispatch] = useReducer(reducer, { count: value });

  return <Provider value={[state, dispatch]} {...props} />;
};

const usetodoContext = () => {
  return usetodo(itemsContext);
};

export { CountProvider, useCountContext };
