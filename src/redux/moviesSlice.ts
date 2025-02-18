import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Movie, MoviesState } from '../types/movie';
import { fetchMovies } from '../api/movieApi';

const initialState: MoviesState = {
  movies: [],
  shortlistedMovies: [],
  loading: false,
  error: null,
};

export const searchMovies = createAsyncThunk(
  'movies/searchMovies',
  async (searchQuery: string) => {
    const response = await fetchMovies(searchQuery);
    return response;
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    toggleShortlist: (state, action: PayloadAction<Movie>) => {
      const movie = action.payload;
      const exists = state.shortlistedMovies.find(m => m.imdbID === movie.imdbID);
      
      if (exists) {
        state.shortlistedMovies = state.shortlistedMovies.filter(
          m => m.imdbID !== movie.imdbID
        );
      } else {
        state.shortlistedMovies.push(movie);
      }
    },
    clearShortlist: (state) => {
      state.shortlistedMovies = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export const { toggleShortlist, clearShortlist } = moviesSlice.actions;
export default moviesSlice.reducer;