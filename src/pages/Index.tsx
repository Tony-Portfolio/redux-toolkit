import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { fetchMovie } from "../redux/slice/movie";
import "./index.css";
import Card from "../components/Card";

const Index = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const movieData = useSelector((state: any) => state.movie.data) || [];
    const loading = useSelector((state: any) => state.movie.loading);

    useEffect(() => {
        if (movieData.length === 0) {
            dispatch(fetchMovie());
        }
    }, [dispatch, movieData]);

    console.log(movieData);

    return (
        <div className="grid-parent w-11/12 mx-auto">
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

export default Index;
