import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useSelector } from 'react-redux';
import Pagination from './Pagination';
import { StyledMovieListContainer, StyledMovieItem, StyledMoviePoster, StyledMovieTitle, StyledMovieDetails } from './StyledComponents';

const fetchMovieDetails = async (omdbID) => {
    const url = `https://www.omdbapi.com/?i=${omdbID}&apikey=cf020b53`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch movie details');
    }
    const data = await response.json();
    return data;
};

const fetchMovies = async (searchQuery, page) => {
    const url = searchQuery
        ? `https://www.omdbapi.com/?s=${searchQuery}&page=${page}&apikey=cf020b53`
        : `https://www.omdbapi.com/?s=fun&page=${page}&apikey=cf020b53`; // Default query if no search query provided
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch movies');
    }
    const data = await response.json();
    return data;
};

function MovieList({ searchQuery }) {
    const [movies, setMovies] = useState([]);
    const [allMovies, setAllMovies] = useState([]); // Ensure it is initialized as an empty array
    const [totalMovies, setTotalMovies] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 10;

    const { sortOption, genreFilter, ratingFilter } = useSelector((state) => state.movie);

    const { data, error, isLoading } = useQuery({
        queryKey: ['movies', searchQuery, currentPage],
        queryFn: () => fetchMovies(searchQuery, currentPage),
        keepPreviousData: true,
    });

    useEffect(() => {
        const fetchAllMovies = async () => {
            let allMovies = [];
            let page = 1;
            let totalMovies = 0;

            while (page <= 5) {
                const data = await fetchMovies(searchQuery, page);
                if (data.Search) {
                    allMovies = [...allMovies, ...data.Search];
                    totalMovies = parseInt(data.totalResults);
                    page++;
                    if (allMovies.length >= totalMovies) break;
                } else {
                    break;
                }
            }
            console.log('Fetched all movies:', allMovies); // Debugging line
            setAllMovies(allMovies);
            setTotalMovies(totalMovies);
        };

        fetchAllMovies();
    }, [searchQuery]);

    useEffect(() => {
        if (allMovies && allMovies.length > 0) {
            const fetchDetailedMovies = async () => {
                try {
                    const detailedMovies = await Promise.all(
                        allMovies.map(async (movie) => {
                            try {
                                const detailedMovie = await fetchMovieDetails(movie.imdbID);
                                return { ...movie, ...detailedMovie };
                            } catch (err) {
                                console.error(`Error fetching details for ${movie.imdbID}:`, err);
                                return movie;
                            }
                        })
                    );

                    let filteredMovies = detailedMovies;

                    if (genreFilter) {
                        filteredMovies = filteredMovies.filter((movie) => {
                            const movieGenres = movie.Genre?.toLowerCase().split(',').map((g) => g.trim());
                            return movieGenres?.includes(genreFilter.toLowerCase());
                        });
                    }

                    if (ratingFilter) {
                        filteredMovies = filteredMovies.filter((movie) => {
                            const rating = parseFloat(movie.imdbRating);
                            return !isNaN(rating) && rating >= parseFloat(ratingFilter);
                        });
                    }

                    if (sortOption === 'rating') {
                        filteredMovies.sort((a, b) => parseFloat(b.imdbRating) - parseFloat(a.imdbRating));
                    } else if (sortOption === 'year') {
                        filteredMovies.sort((a, b) => {
                            const yearA = parseInt(a.Year.split('-')[0], 10);
                            const yearB = parseInt(b.Year.split('-')[0], 10);
                            return yearB - yearA;
                        });
                    }

                    setMovies(filteredMovies);
                } catch (err) {
                    console.error('Error fetching movie details:', err);
                }
            };

            fetchDetailedMovies();
        } else {
            setMovies([]);
        }
    }, [allMovies, genreFilter, ratingFilter, sortOption]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    // Check if there are no movies found for the given search query
    if (!currentMovies.length && searchQuery) return <div>No movies found for "{searchQuery}"</div>;

    // Default message when search query is empty and no movies are found
    if (!currentMovies.length) return <div>No movies available</div>;

    return (
        <StyledMovieListContainer>
            <h1>Movie List</h1>
            <ul>
                {currentMovies.map((movie) => (
                    <StyledMovieItem key={movie.imdbID}>
                        {movie.Poster && movie.Poster !== 'N/A' ? (
                            <StyledMoviePoster src={movie.Poster} alt={movie.Title} />
                        ) : (
                            <p>No poster available</p>
                        )}
                        <StyledMovieTitle>
                            <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
                        </StyledMovieTitle>
                        <StyledMovieDetails>Year: {movie.Year}</StyledMovieDetails>
                        <StyledMovieDetails>Genre: {movie.Genre}</StyledMovieDetails>
                        <StyledMovieDetails>Rating: {movie.imdbRating ? movie.imdbRating : 'N/A'}</StyledMovieDetails>
                    </StyledMovieItem>
                ))}
            </ul>

            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(movies.length / moviesPerPage)}
                onPageChange={handlePageChange}
            />
        </StyledMovieListContainer>
    );
}

export default MovieList;

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';
// import { useSelector } from 'react-redux';
// import Pagination from './Pagination';
// import ErrorBoundary from './ErrorBoundary';
// import { StyledMovieListContainer, StyledMovieItem, StyledMoviePoster, StyledMovieTitle, StyledMovieDetails } from './StyledComponents';

// const fetchMovieDetails = async (omdbID) => {
//     const url = `https://www.omdbapi.com/?i=${omdbID}&apikey=cf020b53`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
// };

// const fetchMovies = async (searchQuery, page) => {
//     const url = searchQuery
//         ? `https://www.omdbapi.com/?s=${searchQuery}&page=${page}&apikey=cf020b53`
//         : `https://www.omdbapi.com/?s=fun&page=${page}&apikey=cf020b53`;

//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
// };

// function MovieList({ searchQuery, showNoMoviesFoundAlert }) {
//     const [movies, setMovies] = useState([]);
//     const [allMovies, setAllMovies] = useState([]);
//     const [totalMovies, setTotalMovies] = useState(0);
//     const [currentPage, setCurrentPage] = useState(1);
//     const moviesPerPage = 10;

//     const { sortOption, genreFilter, ratingFilter } = useSelector((state) => state.movie);

//     const { data, isLoading } = useQuery({
//         queryKey: ['movies', searchQuery, currentPage],
//         queryFn: () => fetchMovies(searchQuery, currentPage),
//         keepPreviousData: true,
//     });

//     useEffect(() => {
//         const fetchAllMovies = async () => {
//             let allMovies = [];
//             let page = 1;
//             let totalMovies = 0;

//             while (page <= 5) {
//                 const data = await fetchMovies(searchQuery, page);
//                 if (data.Search) {
//                     allMovies = [...allMovies, ...data.Search];
//                     totalMovies = parseInt(data.totalResults);
//                     page++;
//                     if (allMovies.length >= totalMovies) break;
//                 } else {
//                     break;
//                 }
//             }
//             setAllMovies(allMovies);
//             setTotalMovies(totalMovies);
//         };

//         fetchAllMovies();
//     }, [searchQuery]);

//     useEffect(() => {
//         if (allMovies.length > 0) {
//             const fetchDetailedMovies = async () => {
//                 const detailedMovies = await Promise.all(
//                     allMovies.map(async (movie) => {
//                         const detailedMovie = await fetchMovieDetails(movie.imdbID);
//                         return { ...movie, ...detailedMovie };
//                     })
//                 );

//                 let filteredMovies = detailedMovies;

//                 if (genreFilter) {
//                     filteredMovies = filteredMovies.filter((movie) => {
//                         const movieGenres = movie.Genre?.toLowerCase().split(',').map((g) => g.trim());
//                         return movieGenres?.includes(genreFilter.toLowerCase());
//                     });
//                 }

//                 if (ratingFilter) {
//                     filteredMovies = filteredMovies.filter((movie) => {
//                         const rating = parseFloat(movie.imdbRating);
//                         return !isNaN(rating) && rating >= parseFloat(ratingFilter);
//                     });
//                 }

//                 if (sortOption === 'rating') {
//                     filteredMovies.sort((a, b) => parseFloat(b.imdbRating) - parseFloat(a.imdbRating));
//                 } else if (sortOption === 'year') {
//                     filteredMovies.sort((a, b) => {
//                         const yearA = parseInt(a.Year.split('-')[0], 10);
//                         const yearB = parseInt(b.Year.split('-')[0], 10);
//                         return yearB - yearA;
//                     });
//                 }

//                 setMovies(filteredMovies);
//                 if (filteredMovies.length === 0) {
//                     showNoMoviesFoundAlert(searchQuery); // Call the alert function from ErrorBoundary here
//                 }
//             };

//             fetchDetailedMovies();
//         } else {
//             setMovies([]);
//         }
//     }, [allMovies, genreFilter, ratingFilter, sortOption, searchQuery, showNoMoviesFoundAlert]);

//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     const indexOfLastMovie = currentPage * moviesPerPage;
//     const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
//     const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

//     if (isLoading) return <div>Loading...</div>;

//     return (
//         <StyledMovieListContainer>
//             <h1>Movie List</h1>
//             {errorMessage && <div>{errorMessage}</div>}

//             <ul>
//                 {currentMovies.map((movie) => (
//                     <StyledMovieItem key={movie.imdbID}>
//                         {movie.Poster && movie.Poster !== 'N/A' ? (
//                             <StyledMoviePoster src={movie.Poster} alt={movie.Title} />
//                         ) : (
//                             <p>No poster available</p>
//                         )}
//                         <StyledMovieTitle>
//                             <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
//                         </StyledMovieTitle>
//                         <StyledMovieDetails>Year: {movie.Year}</StyledMovieDetails>
//                         <StyledMovieDetails>Genre: {movie.Genre}</StyledMovieDetails>
//                         <StyledMovieDetails>Rating: {movie.imdbRating || 'N/A'}</StyledMovieDetails>
//                     </StyledMovieItem>
//                 ))}
//             </ul>

//             <Pagination
//                 currentPage={currentPage}
//                 totalPages={Math.ceil(movies.length / moviesPerPage)}
//                 onPageChange={handlePageChange}
//             />
//         </StyledMovieListContainer>
//     );
// }

// export default MovieList;