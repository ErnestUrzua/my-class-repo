import React, { useReducer, useStoreContext, createContext } from "react";

// Don't forget to import all of your actions!

const Posts = createContext({
  title: "",
  body: "",
  name: ""
})

const { Provider } = Posts;

function reducer(state, action) {
  switch (action.type) {
  case "UPDATE_POSTS":
    return [
      ...state,
      {
        id: state,
        title: action.title
        body: action.body
      }
    ];
  case "ADD_POST":
    return state.filter((_, index) => {
      return index !== action.index;
    });
  case "REMOVE_POST":
    return state.map((item, index) => {
      if (index === action.index) {
        return Object.assign({}, item, {
          priority: !item.priority
        });
      }
      return item;
    });
  default:
    return state;
  }
}

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {});

  return <Provider value={[state,dispatch]}{...props}/>;
};

const useStoreContext = () => {};

export { StoreProvider, useStoreContext };
