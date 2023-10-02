interface Movie {
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

const DetailMovie = ({ movie }: { movie: Movie }) => {

    const formatDate = (date: any) => {
        const inputDate = date;
        const formattedDate = new Date(inputDate).toLocaleDateString('en-EN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        return formattedDate;
    }


    return (
        <>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} className="w-full top-0 left-0 z-[1] h-[800px] bg-fixed absolute blur-sm" alt="" />
            <div className="absolute top-0 left-0 w-full h-[850px] bg-black/30 z-[1]"></div>
            <div className="relative flex md:flex-row flex-col w-11/12 md:w-10/12 mx-auto py-10 md:py-20 z-[2]">
                <div className="shrink-0">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className="border-2 border-white object-top mx-auto md:m-0 md:w-[300px] h-[500px] md:h-[400px] object-cover rounded" />
                </div>
                <div className="md:px-4 md:m-0 my-2 font-medium dark:text-white text-black">
                    <h3 className="text-4xl font-bold">{movie.title}</h3>
                    <p className="leading-relaxed">{movie.tagline}</p>
                    <div className="my-1 text-[12px]">
                        <ul className="flex gap-1 flex-wrap">
                            {movie.genres.map((genre: any) => (
                                <li key={genre.id} className="bg-white p-1 px-2 rounded-full text-black text-md font-bold">
                                    {genre.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p>Release Date : {formatDate(movie.release_date)}</p>
                    <div className="flex gap-1">Rating : <div className="flex gap-1 items-center text-[13px]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="yellow" className="w-4 h-4">
                            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                        </svg>
                        <p>{movie.vote_average}</p>
                    </div></div>
                    <div className="my-4 leading-relaxed">
                        <p>Overview</p>
                        <p className="text-sm">{movie.overview}</p>
                    </div>
                    <div className="my-4 leading-relaxed">
                        <h3>Production</h3>
                        <div className="flex gap-4 my-2 flex-wrap">
                            {movie.production_companies.map((production: any) => (
                                <p key={production.id} className="rounded border border-white p-2 px-4 shadow-md hover:bg-white text-sm hover:text-black transition duration-300 ease-in-out cursor-pointer">{production.name}</p>
                                // <img src={`https://image.tmdb.org/t/p/w500${production.logo_path}`} alt="" className="w-[200px]" />
                            ))}
                        </div>
                    </div>
                    {movie.homepage ? (
                        <a className="bg-white text-black p-2 font-bold rounded-full block w-fit text-sm my-8 px-4" href={movie.homepage} target="_blank">Visit Website</a>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </>
    )
}
export default DetailMovie