import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import "./card.css";

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
interface Genres {
    [key: number]: string;
}

const Card = ({ movie }: { movie: Movie }) => {
    const movieProp = movie;
    const genres: Genres = {
        28: 'Action',
        12: 'Adventure',
        16: 'Animation',
        35: 'Comedy',
        80: 'Crime',
        99: 'Documentary',
        18: 'Drama',
        10751: 'Family',
        14: 'Fantasy',
        36: 'History',
        27: 'Horror',
        10402: 'Music',
        9648: 'Mystery',
        10749: 'Romance',
        878: 'Science Fiction',
        10770: 'TV Movie',
        53: 'Thriller',
        10752: 'War',
        37: 'Western'
    };

    return (
        <Link to = {`/movie/${movieProp.id}`}>
            <div className="rounded border border-gray-700 relative group hover:scale-[1.10] z-1 hover:z-[5] transition ease-in-out duration-300 hover:shadow-md">
                <div className="w-full h-full">
                    <img src={`https://image.tmdb.org/t/p/w500${movieProp?.poster_path}`} className="w-full h-full" alt="" loading="lazy" />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-black/20 opacity-100 group-hover:opacity-20 transition ease-in-out duration-300"></div>
                <div className="absolute bottom-0 left-0 text-white text-sm p-2 leading-tight linear w-full">
                    <div className="flex gap-2">
                        <h3 className="text-lg font-medium">{movieProp.title}</h3>
                        <div className="flex gap-1 items-center text-[13px]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="yellow" className="w-4 h-4">
                                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                            </svg>
                            <p>{movieProp.vote_average}</p>
                        </div>
                    </div>
                    <div className="my-1 text-[12px]">
                        <ul className="flex gap-1 flex-wrap">
                            Genre :
                            {movieProp.genre_ids.map((id: any, Card: any) => (
                                <li key={Card}>
                                    {genres[id]}
                                    {Card !== movieProp.genre_ids.length - 1 ? ', ' : ''}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="text-slate-300 hidden group-hover:block text-[12px]">{movieProp.overview?.substr(0, 100)}...</p>
                </div>
            </div>
        </Link>
    );
}

export default Card;
