import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MovieList from '../components/MovieList'; 

// Create a mock reducer for the Redux store
const mockReducer = (state = { movie: {} }, action) => state;

// Create a mock store
const store = createStore(mockReducer);

// Create a QueryClient instance
const queryClient = new QueryClient();

describe('MovieList Component', () => {
    it('should display no movie found if nothing is given', async () => {
        render(
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <MovieList searchQuery="" />
                </QueryClientProvider>
            </Provider>
        );

        // Wait for the "Loading..." text to disappear
        await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());
        
        // If no movie is present
        expect(screen.getByText('No movies found')).toBeInTheDocument();
    });
});












