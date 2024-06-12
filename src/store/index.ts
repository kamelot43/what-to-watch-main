import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer';
import {setFilms} from './action';
import {createAPI} from '../services/api';
import {films} from '../mocks/films';

const api = createAPI();
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }),
});
store.dispatch(setFilms(films));
