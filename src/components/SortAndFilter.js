// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setSortOption, setGenreFilter, setRatingFilter } from '../slices/movieSlice'; // Redux actions

// function SortAndFilter() {
//     const dispatch = useDispatch();
//     const { sortOption, genreFilter, ratingFilter } = useSelector((state) => state.movie); // Get current sort and filter options

//     // Handle sort change
//     const handleSortChange = (event) => {
//         dispatch(setSortOption(event.target.value));
//     };

//     // Handle genre filter change
//     const handleGenreChange = (event) => {
//         dispatch(setGenreFilter(event.target.value));
//     };

//     // Handle rating filter change
//     const handleRatingChange = (event) => {
//         dispatch(setRatingFilter(event.target.value));
//     };

//     return (
//         <div>
//             <div>
//                 <label>Sort by:</label>
//                 <select value={sortOption} onChange={handleSortChange}>
//                     <option value="rating">Sort by Rating</option>
//                     <option value="year">Sort by Year</option>
//                 </select>
//             </div>

//             <div>
//                 <label>Filter by Genre:</label>
//                 <select value={genreFilter} onChange={handleGenreChange}>
//                     <option value="">All Genres</option>
//                     <option value="Action">Action</option>
//                     <option value="Comedy">Comedy</option>
//                     <option value="Drama">Drama</option>
//                     <option value="Adventure">Adventure</option>
//                     <option value="Romance">Romance</option>
//                     <option value="Horror">Horror</option>
//                     <option value="Crime">Crime</option>
                    
//                 </select>
//             </div>

//             <div>
//                 <label>Filter by Rating:</label>
//                 <select value={ratingFilter} onChange={handleRatingChange}>
//                     <option value="">All Ratings</option>
//                     <option value="6">Above 6</option>
//                     <option value="7">Above 7</option>
//                     <option value="8">Above 8</option>
//                     <option value="9">Above 9</option>
//                 </select>
//             </div>
//         </div>
//     );
// }

// export default SortAndFilter;






import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortOption, setGenreFilter, setRatingFilter } from '../slices/movieSlice';
import { StyledContainer, StyledLabel, StyledSelect, StyledFormControl } from './StyledComponents'; // Import styled components

function SortAndFilter() {
    const dispatch = useDispatch();
    const { sortOption, genreFilter, ratingFilter } = useSelector((state) => state.movie);

    const handleSortChange = (event) => {
        dispatch(setSortOption(event.target.value));
    };

    const handleGenreChange = (event) => {
        dispatch(setGenreFilter(event.target.value));
    };

    const handleRatingChange = (event) => {
        dispatch(setRatingFilter(event.target.value));
    };

    return (
        <StyledContainer>
            <StyledFormControl>
                <StyledLabel htmlFor="sort-select">Sort by:</StyledLabel>
                <StyledSelect id="sort-select" value={sortOption} onChange={handleSortChange}>
                    <option value="rating">Sort by Rating</option>
                    <option value="year">Sort by Year</option>
                </StyledSelect>
            </StyledFormControl>

            <StyledFormControl>
                <StyledLabel htmlFor="genre-select">Filter by Genre:</StyledLabel>
                <StyledSelect id="genre-select" value={genreFilter} onChange={handleGenreChange}>
                    <option value="">All Genres</option>
                    <option value="Action">Action</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Romance">Romance</option>
                    <option value="Horror">Horror</option>
                    <option value="Crime">Crime</option>
                </StyledSelect>
            </StyledFormControl>

            <StyledFormControl>
                <StyledLabel htmlFor="rating-select">Filter by Rating:</StyledLabel>
                <StyledSelect id="rating-select" value={ratingFilter} onChange={handleRatingChange}>
                    <option value="">All Ratings</option>
                    <option value="6">Above 6</option>
                    <option value="7">Above 7</option>
                    <option value="8">Above 8</option>
                    <option value="9">Above 9</option>
                </StyledSelect>
            </StyledFormControl>
        </StyledContainer>
    );
}

export default SortAndFilter;






