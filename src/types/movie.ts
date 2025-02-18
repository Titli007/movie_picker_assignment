export interface Movie {
    imdbID: string;
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
  }
  
  export interface MoviesState {
    movies: any,
    shortlistedMovies: Movie[];
    loading: boolean;
    error: string | null;
  }
  
  export interface SearchFilters {
    type: string;
    year: string;
    page: number;
  }