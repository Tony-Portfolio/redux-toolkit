import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface MovieSearch {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  



const initialState = {
    data: null as MovieSearch | null,
    loading: true,
    error: null as string | null
};

const fetchMovieSearch = createAsyncThunk("fetchMovieSearch", async (query: any) => {
    //https://api.jikan.moe/v4/MovieSearch?q=naruto&type=special
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=25b0f5baded880110d6ee1c123e88253`);
    const data = await response.json();
    return data.results as MovieSearch;
})

const MovieSearchSlice = createSlice({
    name: "movieDetail",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovieSearch.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchMovieSearch.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchMovieSearch.rejected, (state, action) => {
            state.error = action.error.message || "An error occured";
            state.loading = false;
            console.log("Error : ", action.payload)
        })
    }
})
export { fetchMovieSearch };
export default MovieSearchSlice.reducer;