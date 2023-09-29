import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../redux/slice/movieDetails";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";

const Details = () => {
    const { id } = useParams();
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    React.useEffect(() => {
        dispatch(fetchMovieDetails(id));
    }, [dispatch, id]);

    const movieDetail = useSelector((state: any) => state.movieDetails.data);
    const loading = useSelector((state: any) => state.movieDetails.loading);

    const formatDate = (date: any) => {
        const inputDate = date;
        const formattedDate = new Date(inputDate).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

        return formattedDate;
    }

    return (
        loading ? (
            <p>Loading...</p>
        ) : movieDetail ? (
            <div className="relative min-h-screen">
                <img src={`https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`} className="w-full z-[-1] md:h-screen h-3/6 bg-fixed absolute blur-sm" alt="" />
                <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
                <div className="relative flex md:flex-row flex-col w-11/12 md:w-10/12 mx-auto py-10 md:py-20">
                    <div className="shrink-0">
                        <img src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`} alt="" className="border-2 border-white w-11/12 mx-auto md:m-0 md:w-[300px] h-[500px] md:h-[400px] object-cover rounded" />
                    </div>
                    <div className="text-white md:px-4 font-medium">
                        <h3 className="text-4xl font-bold">{movieDetail.title}</h3>
                        <p className="leading-relaxed">{movieDetail.tagline}</p>
                        <div className="my-1 text-[12px]">
                            <ul className="flex gap-1 flex-wrap">
                                {movieDetail.genres.map((genre: any) => (
                                    <li key={genre.id} className="bg-white p-1 px-2 rounded-full text-black text-md font-bold">
                                        {genre.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p>Release Date : {formatDate(movieDetail.release_date)}</p>
                        <div className="flex gap-1">Rating : <div className="flex gap-1 items-center text-[13px]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="yellow" className="w-4 h-4">
                                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                            </svg>
                            <p>{movieDetail.vote_average}</p>
                        </div></div>
                        <div className="my-4 leading-relaxed">
                            <p>Overview</p>
                            <p className="text-sm">{movieDetail.overview}</p>
                        </div>
                        <div className="my-4 leading-relaxed">
                            <h3>Production</h3>
                            <div className="flex gap-4 my-2 flex-wrap">
                                {movieDetail.production_companies.map((production: any) => (
                                    <p className="rounded border border-white p-2 px-4 shadow-md hover:bg-white text-sm hover:text-black transition duration-300 ease-in-out cursor-pointer">{production.name}</p>
                                    // <img src={`https://image.tmdb.org/t/p/w500${production.logo_path}`} alt="" className="w-[200px]" />
                                ))}
                            </div>
                        </div>
                        {movieDetail.homepage ? (
                            <a className="bg-white text-black p-2 font-bold rounded-full block w-fit text-sm my-8 px-4" href={movieDetail.homepage} target="_blank">Kunjungi Website</a>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
        ) : (
            <p>No movie details available</p>
        )
    );

}

export default Details;
