import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Film} from '../../../types/film';
import {RequestsStatus} from '../../../const';
import {NameSpace} from '../../../const';
import {fetchFilm} from '../../thunks/film';

type FilmData = {
  film: Film | null;
  status: RequestsStatus;
  hasError: boolean;
};

const initialState: FilmData = {
  film: null,
  status: RequestsStatus.Idle,
  hasError: false,
};

export const filmData = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {
    updateFilm (state: FilmData, action: PayloadAction<number | null>) {
      if (state?.film?.id === action.payload) {
        state.film.isFavorite = !state.film.isFavorite;
      }
    },
    clearFavoriteStatus (state: FilmData) {
      if (state.film) {
        state.film.isFavorite = false;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilm.pending, (state) => {
        state.status = RequestsStatus.Loading;
        state.hasError = false;
      })
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.film = action.payload;
        state.status = RequestsStatus.Success;
      })
      .addCase(fetchFilm.rejected, (state) => {
        state.status = RequestsStatus.Failed;
        state.hasError = true;
      });
  }
});

export const {updateFilm, clearFavoriteStatus} = filmData.actions;
