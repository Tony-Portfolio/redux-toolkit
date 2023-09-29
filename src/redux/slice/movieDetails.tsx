import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface MovieDetails {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: {
        id: number;
        name: string;
        poster_path: string;
        backdrop_path: string;
    };
    budget: number;
    genres: {
        id: number;
        name: string;
    }[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: {
        id: number;
        logo_path: string | null;
        name: string;
        origin_country: string;
    }[];
    production_countries: {
        iso_3166_1: string;
        name: string;
    }[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: {
        english_name: string;
        iso_639_1: string;
        name: string;
    }[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}



const initialState = {
    data: null as MovieDetails | null,
    loading: false,
    error: null as string | null
};

const fetchMovieDetails = createAsyncThunk("fetchMovieDetails", async (id: any) => {
    //https://api.jikan.moe/v4/MovieDetails?q=naruto&type=special
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=25b0f5baded880110d6ee1c123e88253`);
    const data = await response.json();
    return data as MovieDetails;
})

const MovieDetailsSlice = createSlice({
    name: "movieDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovieDetails.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchMovieDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchMovieDetails.rejected, (state, action) => {
            state.error = action.error.message || "An error occured";
            state.loading = false;
            console.log("Error : ", action.payload)
        })
    }
})
export { fetchMovieDetails };
export default MovieDetailsSlice.reducer;