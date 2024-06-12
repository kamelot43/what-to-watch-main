import {createAction} from '@reduxjs/toolkit';
import {Film} from '../types/film';

export const Action = {
  SET_GENRE: 'genre/set',
  SET_FILMS: 'films/set',
  INCREASE_COUNTER: 'counter/increase',
  RESET_COUNTER: 'counter/reset',
};

export const setGenre = createAction<string>(Action.SET_GENRE);
export const increaseCounter = createAction(Action.INCREASE_COUNTER);
export const resetCounter = createAction(Action.RESET_COUNTER);
export const setFilms = createAction<Film[]>(Action.SET_FILMS);
