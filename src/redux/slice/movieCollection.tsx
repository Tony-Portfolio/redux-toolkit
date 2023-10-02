import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface MovieCollection {
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
    data: null as MovieCollection | null,
    loading: false,
    error: null as string | null
};

const fetchMovieCollection = createAsyncThunk("fetchMovieCollection", async (id: any) => {
    //https://api.jikan.moe/v4/MovieCollection?q=naruto&type=special
    const response = await fetch(`https://api.themoviedb.org/3/collection/${id}?language=en-US&api_key=25b0f5baded880110d6ee1c123e88253`);
    const data = await response.json();
    return data.parts as MovieCollection;
})

const MovieCollectionSlice = createSlice({
    name: "movieCollection",
    initialState,
    reducers: {
        resetCollectionState: () => { return initialState }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovieCollection.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchMovieCollection.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchMovieCollection.rejected, (state, action) => {
            state.error = action.error.message || "An error occured";
            state.loading = false;
            console.log("Error : ", action.payload)
        })
    }
})
export { fetchMovieCollection };
export const { resetCollectionState } = MovieCollectionSlice.actions;
export default MovieCollectionSlice.reducer;