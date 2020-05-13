import React, { useReducer } from 'react';

// @note  <Context.Provider>: is used to provide context object for its children. Usually export and wrapped around App in the top level to provide context in any App level.

// @component   reusable code for context-creation with useReducer to store and udpate state
const createDataContext = (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // @note    Map the dispatch functions in actions object to boundAction;
    // 1. Receive actions object with dispatch functions
    // 2. Map key in actions object and give dispatch param
    // 3. bindActions: should now be an object of key: dispatch({...})
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};

export default createDataContext;
