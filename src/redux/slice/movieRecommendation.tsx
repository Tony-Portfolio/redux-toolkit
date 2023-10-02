import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface MovieRecommendation {
    adult: boolean;
    backdrop_path: string;
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}




const initialState = {
    data: null as MovieRecommendation | null,
    loading: true,
    error: null as string | null
};

const fetchMovieRecommendation = createAsyncThunk("fetchMovieRecommendation", async (id: any) => {
    //https://api.jikan.moe/v4/movieRecommendation?q=naruto&type=special
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&api_key=25b0f5baded880110d6ee1c123e88253`);
    const data = await response.json();
    return data.results as MovieRecommendation;
})

const movieRecommendationSlice = createSlice({
    name: "movieRecommendation",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovieRecommendation.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchMovieRecommendation.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchMovieRecommendation.rejected, (state, action) => {
            state.error = action.error.message || "An error occured";
            state.loading = false;
            console.log("Error : ", action.payload)
        })
    }
})
export { fetchMovieRecommendation };
export default movieRecommendationSlice.reducer;