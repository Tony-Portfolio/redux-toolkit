import { combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slice/movie";
import movieDetailsReducer from "./slice/movieDetails";

const rootReducer = combineReducers({
  movie: movieReducer,
  movieDetails: movieDetailsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
