import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}


const initialState = {
    data: null as Movie | null,
    loading: false,
    error: null as string | null
};

const fetchMovie = createAsyncThunk("fetchMovie", async () => {
    //https://api.jikan.moe/v4/movie?q=naruto&type=special
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=25b0f5baded880110d6ee1c123e88253");
    const data = await response.json();
    return data.results as Movie;
})

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovie.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchMovie.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchMovie.rejected, (state, action) => {
            state.error = action.error.message || "An error occured";
            state.loading = false;
            console.log("Error : ", action.payload)
        })
    }
})
export { fetchMovie };
export default movieSlice.reducer;