import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieDetail } from "../redux/slice/movieDetail";
import { fetchMovieCollection } from "../redux/slice/movieCollection";
import { fetchMovieTopRated } from "../redux/slice/movieTopRated";
import { resetCollectionState } from "../redux/slice/movieCollection";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { fetchMovieRecommendation } from "../redux/slice/movieRecommendation";
import "./index.css";
import ListCard from "../components/ListCard";
import DetailMovie from "../components/DetailMovie";

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    useEffect(() => {
        dispatch(fetchMovieDetail(id));
        dispatch(fetchMovieTopRated());
        dispatch(fetchMovieRecommendation(id));
    }, [dispatch, id]);

    const movieDetail = useSelector((state: any) => state.movieDetails.data);
    const loading = useSelector((state: any) => state.movieDetails.loading);
    const movieCollection = useSelector((state: any) => state.movieCollection.data);
    const movieTopRated = useSelector((state: any) => state.movieTopRated.data);
    const movieRecommendation = useSelector((state: any) => state.movieRecommendation.data);

    useEffect(() => {
        dispatch(resetCollectionState());
        if (movieDetail) {
            if (movieDetail.belongs_to_collection) {
                const collectionId = movieDetail.belongs_to_collection.id;
                if (collectionId) {
                    dispatch(fetchMovieCollection(collectionId));
                }
            }
        }
    }, [dispatch, id, movieDetail]);

    return (
        loading ? (
            <p>Loading...</p>
        ) : movieDetail ? (
            <div className="relative dark:text-white text-black pt-10">
                <DetailMovie movie={movieDetail} />
                <ListCard data={movieCollection} title="Collection" />
                <ListCard data={movieRecommendation} title="Recommended" />
                <ListCard data={movieTopRated} title="Top Rated" ></ListCard>
            </div>
        ) : (
            <p>No movie details available</p>
        )
    );
}

export default Detail;