import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { fetchMovie } from '../redux/slice/movie';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
const MovieInfoLandingPage = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const movieData: [] = useSelector((state: any) => state.movie.data) || [];
    React.useEffect(() => {
        if (movieData.length === 0) {
            dispatch(fetchMovie());
        }
    }, [dispatch, movieData]);
    console.log("DATA : ? ", movieData)
    return (
        <div className="bg-black text-white min-h-screen font-sans">
            {/* Header */}
            {/* <header className="bg-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">MovieInfo</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Sign In</button>
        </div>
      </header> */}

            {/* Hero Section */}
            <section className="bg-cover bg-center h-96">
                <div className="container mx-auto h-full flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold">Explore the World of Movies</h2>
                        <p className="mt-4 text-xl">Discover information about your favorite movies.</p>
                        <Link to="/movie/popular" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 mt-6 rounded-full font-semibold block w-fit mx-auto">Get Started</Link>
                    </div>
                </div>
            </section>

            {/* Featured Movies */}
            <section className="py-12">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-6">Featured Movies</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {/* Movie cards go here */}
                        {movieData.map((data, index) => (
                            <Card movie={data} key={index}></Card>
                        ))}
                        {/* Example Movie Card:
                        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
                            <img src="/movie-poster.jpg" alt="Movie Poster" className="w-full h-64 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">Movie Title</h3>
                                <p className="text-gray-400">Release Date: 2023</p>
                                <p className="text-gray-400">Genre: Action, Drama</p>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md mt-4">Details</button>
                            </div>
                        </div> */}

                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-800 py-6">
                <div className="container mx-auto text-center">
                    <p className="text-gray-400">© 2023 Info Movie. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default MovieInfoLandingPage;
