import React, { createContext, useReducer, Dispatch, FC } from "react";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  SET_GAMES = "SET_GAMES",
  SEARCH_QUERY = "SEARCH_QUERY",
}

// Product

type GamesPayload = {
  [Types.SET_GAMES]: [];
};

export type GamesActions = ActionMap<GamesPayload>[keyof ActionMap<GamesPayload>];

export const gamesReducer = (state: any[], action: GamesActions | SearchQueryActions) => {
  switch (action.type) {
    case Types.SET_GAMES:
      return [...action.payload];
    default:
      return state;
  }
};

type SearchQueryPayload = {
  [Types.SEARCH_QUERY]: {
    searchQuery: string;
  };
};

export type SearchQueryActions = ActionMap<SearchQueryPayload>[keyof ActionMap<SearchQueryPayload>];

export const searchQueryReducer = (state: string, action: GamesActions | SearchQueryActions) => {
  switch (action.type) {
    case Types.SEARCH_QUERY:
      return (state = action.payload.searchQuery);
    default:
      return state;
  }
};

type InitialStateType = {
  games: any[];
  searchQuery: string;
};

const initialState: InitialStateType = {
  games: [],
  searchQuery: "",
};

const GamesContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<GamesActions | SearchQueryActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = ({ games, searchQuery }: InitialStateType, action: GamesActions | SearchQueryActions) => ({
  games: gamesReducer(games, action),
  searchQuery: searchQueryReducer(searchQuery, action),
});

const GamesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return <GamesContext.Provider value={{ state, dispatch }}>{children}</GamesContext.Provider>;
};

export { GamesProvider, GamesContext };
