import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './slices/movieSlice'; // Import movieReducer

const store = configureStore({
    reducer: {
        movie: movieReducer, // Add movieReducer to the store
    },
});

export default store;
