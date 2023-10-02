import { combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slice/movie";
import movieDetailReducer from "./slice/movieDetail";
import movieCollectionReducer from "./slice/movieCollection";
import movieTopRatedReducer from "./slice/movieTopRated";
import movieRecommendationReducer from "./slice/movieRecommendation";
import movieSearchReducer from './slice/movieSearch';

const rootReducer = combineReducers({
  movie: movieReducer,
  movieDetails: movieDetailReducer,
  movieCollection: movieCollectionReducer,
  movieTopRated: movieTopRatedReducer,
  resetCollectionState: movieCollectionReducer,
  movieRecommendation: movieRecommendationReducer,
  movieSearch: movieSearchReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
