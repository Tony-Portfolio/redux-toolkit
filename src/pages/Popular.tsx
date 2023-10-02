import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { fetchMovie } from "../redux/slice/movie";
import Card from "../components/Card";

const Popular = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const movieData: [] = useSelector((state: any) => state.movie.data) || [];
    const loading = useSelector((state: any) => state.movie.loading);

    useEffect(() => {
        if (movieData.length === 0) {
            dispatch(fetchMovie());
        }
    }, [dispatch, movieData]);

    console.log(movieData);

    return (
        <div className="grid-parent w-11/12 md:w-10/12 mx-auto py-10 pt-20">
            {loading ? (
                <div>Loading...</div>
            ) : (
                movieData.map((movie: any) => (
                    <Card key={movie.id} movie={movie} />
                ))
            )}
        </div>
    )
}

export default Popular;
