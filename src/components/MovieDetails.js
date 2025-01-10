


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';  
import { StyledTitle, StyledPoster, StyledMovieDetailsContainer, StyledDetail } from './StyledComponents';

const fetchMovieDetails = async (id) => {
    const url = `https://www.omdbapi.com/?i=${id}&apikey=4c81ff2e`;
    const response = await fetch(url);

    const data = await response.json();
    return data;
};



function MovieDetails() {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getMovieDetails = async () => {
            try {
                const data = await fetchMovieDetails(id);
                if (data.Response === 'False') {
                    throw new Error('Movie not found');
                }
                setMovieDetails(data);
                setLoading(false);
            } catch (err) {
                setError(err.message || 'Failed to fetch movie details');
                setLoading(false);
            }
        };

        getMovieDetails();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!movieDetails) return <div>No movie details available.</div>;

    return (
        <StyledMovieDetailsContainer>
            <StyledTitle>{movieDetails.Title} ({movieDetails.Year})</StyledTitle>
            <StyledPoster src={movieDetails.Poster} alt={movieDetails.Title} />
            <StyledDetail><strong>Genre:</strong> {movieDetails.Genre}</StyledDetail>
            <StyledDetail><strong>Rating:</strong> {movieDetails.imdbRating}</StyledDetail>
            <StyledDetail><strong>Actors:</strong> {movieDetails.Actors}</StyledDetail>
            <StyledDetail><strong>Plot:</strong> {movieDetails.Plot}</StyledDetail>
        </StyledMovieDetailsContainer>
    );
}

export default MovieDetails;