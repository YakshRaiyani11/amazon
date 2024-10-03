import React, { createContext, useContext, useReducer } from "react";

// Create the context
export const StateContext = createContext();

// Create the provider to wrap the app with
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Custom hook to access state
export const useStateValue = () => useContext(StateContext);
