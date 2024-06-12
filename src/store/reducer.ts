import {createReducer} from '@reduxjs/toolkit';
import {setFilms ,setGenre, increaseCounter, resetCounter} from './action';
import {Genres} from '../const';
import {Film} from '../types/film';

type State = {
  activeGenre: string;
  films: Film[];
  counter: number;
};

const initialState: State = {
  activeGenre: Genres.AllGenres,
  films: [],
  counter: 1,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(increaseCounter, (state, action) => {
      state.counter += 1;
    })
    .addCase(resetCounter, (state, action) => {
      state.counter = 1;
    });
});
