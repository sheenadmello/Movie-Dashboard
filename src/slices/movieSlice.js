import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: [],
    sortOption: 'rating',
    genreFilter: '',
    ratingFilter: '',
    filterOption: ''
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies(state, action) {
            state.movies = action.payload;
        },
        setSortOption(state, action) {
            state.sortOption = action.payload;
        },
        setGenreFilter(state, action) {
            state.genreFilter = action.payload;
        },
        setRatingFilter(state, action) {
            state.ratingFilter = action.payload;
        },
        setFilterOption(state, action) {
            state.filterOption = action.payload;
        }
    }
});

export const { setMovies, setSortOption, setGenreFilter, setRatingFilter, setFilterOption } = movieSlice.actions;

export default movieSlice.reducer;

