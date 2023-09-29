import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Anime {
    mal_id: number;
    url: string;
    images: {
        jpg: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
        };
        webp: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
        };
    };
    trailer: {
        youtube_id: string;
        url: string;
        embed_url: string;
        images: {
            image_url: string;
            small_image_url: string;
            medium_image_url: string;
            large_image_url: string;
            maximum_image_url: string;
        };
    };
    approved: boolean;
    titles: Title[];
    title: string;
    title_english: string;
    title_japanese: string;
    title_synonyms: string[];
    type: string;
    source: string;
    episodes: number;
    status: string;
    airing: boolean;
    aired: {
        from: string;
        to: string;
        prop: {
            from: {
                day: number;
                month: number;
                year: number;
            };
            to: {
                day: number;
                month: number;
                year: number;
            };
        };
        string: string;
    };
    duration: string;
    rating: string;
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background: string;
    season: string;
    year: number;
    broadcast: {
        day: string;
        time: string;
        timezone: string;
        string: string;
    };
    producers: Producer[];
    licensors: Licensor[];
    studios: Studio[];
    genres: Genre[];
    explicit_genres: any[];
    themes: Theme[];
    demographics: Demographic[];
}

interface Title {
    type: string;
    title: string;
}

interface Producer {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

interface Licensor {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

interface Studio {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

interface Genre {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

interface Theme {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

interface Demographic {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

const initialState = {
    data: null as Anime | null,
    loading: false,
    error: null as string | null
};

const fetchAnime = createAsyncThunk("fetchAnime", async () => {
    //https://api.jikan.moe/v4/anime?q=naruto&type=special
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=25b0f5baded880110d6ee1c123e88253");
    const data = await response.json();
    return data.data as Anime;
})

const animeSlice = createSlice({
    name: "anime",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchAnime.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchAnime.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchAnime.rejected, (state, action) => {
            state.error = action.error.message || "An error occured";
            console.log("Error : ", action.payload)
        })
    }
})
export { fetchAnime };
export default animeSlice.reducer;